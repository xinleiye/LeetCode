/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    let res = 1e5;
    let toppings;
    const toppingNum = toppingCosts.length;
    const calcToppingCost = () => {
        let costs = [];
        let costsSet = new Set();

        for (let i = 0, len = Math.pow(2, toppingNum * 2) - 1; i <= len; i++) {
            let index = 0;
            let cost = 0;
            let toppings = i;

            while (toppings) {
                if (toppings & 1) {
                    cost += toppingCosts[index % toppingNum];
                }
                toppings = toppings >>> 1;
                index++;
            }
            if (!costsSet.has(cost)) {
                costsSet.add(cost);
                costs.push(cost);
            }
        }
       
        return costs;
    };
    const getResult = (newCost) => {
        if (Math.abs(newCost - target) < Math.abs(res - target)) {
            res = newCost;
        } else if (Math.abs(newCost - target) === Math.abs(res - target)) {
            res = Math.min(newCost, res);
        }
    };

    toppings = calcToppingCost();
    baseCosts.forEach(base => {
        toppings.forEach(item => {
            getResult(base + item);
        });
    });
    
    return res;
};
