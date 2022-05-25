/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    if (stockPrices.length === 1) {
        return 0;
    }

    stockPrices.sort((s1, s2) => s1[0] - s2[0]);
    let res = 1;
    let dx = BigInt(stockPrices[1][0] - stockPrices[0][0]);
    let dy = BigInt(stockPrices[1][1] - stockPrices[0][1]);
    const total = stockPrices.length;
    for (let i = 2; i < total; i++) {
        const curDx = BigInt(stockPrices[i][0] - stockPrices[i - 1][0]);
        const curDy = BigInt(stockPrices[i][1] - stockPrices[i - 1][1]);
        if (BigInt(curDx * dy) !== BigInt(curDy * dx)) {
            res++;
        }
        dx = curDx;
        dy = curDy;
    }
    
    return res;
};
