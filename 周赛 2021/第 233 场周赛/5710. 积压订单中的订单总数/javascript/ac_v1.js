/**
 * @param {number[][]} orders
 * @return {number}
 */
 var getNumberOfBacklogOrders = function(orders) {
    let res = 0;
    const mod = 1e9 + 7;
    const buyBlock = [];
    const sellBlock = [];
    const insertBuyBlock = (order) => {
        let index = buyBlock.length - 1;

        buyBlock.push(order);
        while (index >= 0 && buyBlock[index][0] < order[0]) {
            buyBlock[index + 1] = buyBlock[index];
            index--;
        }
        index++;
        buyBlock[index] = order;
    };
    const insertSellBlock = (order) => {
        let index = sellBlock.length;

        sellBlock.push(order);
        while (index > 0 && sellBlock[index - 1][0] > order[0]) {
            sellBlock[index] = sellBlock[index - 1];
            index--;
        }
        sellBlock[index] = order;
    };
    const getOrderMount = (orderList) => {
        orderList.forEach(order => {
            res = (res + order[1]) % mod;
        });
    };
    
    orders.forEach(order => {
        if (order[2] === 0) { // 采购订单
            if (sellBlock.length > 0 && sellBlock[0][0] <= order[0]) {
                // 匹配操作
                while (sellBlock.length && sellBlock[0][0] <= order[0]) {
                    if (sellBlock[0][1] <= order[1]) {
                        order[1] -= sellBlock[0][1];
                        sellBlock.shift();
                    } else {
                        sellBlock[0][1] -= order[1];
                        order[1] = 0;
                        break;
                    }
                }
                if (order[1] > 0) {
                    insertBuyBlock(order);
                }
            } else {
                insertBuyBlock(order);
            }
        } else if (order[2] === 1) { // 销售订单
            if (buyBlock.length > 0 && buyBlock[0][0] >= order[0]) {
                // 匹配操作
                while (buyBlock.length && buyBlock[0][0] >= order[0]) {
                    if (buyBlock[0][1] <= order[1]) {
                        order[1] -= buyBlock[0][1];
                        buyBlock.shift();
                    } else {
                        buyBlock[0][1] -= order[1];
                        order[1] = 0;
                        break;
                    }
                }
                if (order[1] > 0) {
                    insertSellBlock(order);
                }
            } else {
                insertSellBlock(order);
            }
        }
    });

    getOrderMount(buyBlock);
    getOrderMount(sellBlock);

    return res;
};
