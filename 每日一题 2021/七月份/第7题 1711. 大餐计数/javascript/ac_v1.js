/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    let res = 0;
    const mod = 1e9 + 7;
    const foodCountMap = new Map();
    const food = [];
    let maxPower = 0;
    let maxDelicious = 0;

    deliciousness.forEach(val => {
        if (foodCountMap.has(val)) {
            foodCountMap.set(val, foodCountMap.get(val) + 1);
        } else {
            foodCountMap.set(val, 1);
            food.push(val);
            maxDelicious = Math.max(maxDelicious, val);
        }
    });

    maxPower = Math.ceil(Math.log2(maxDelicious)) + 1;
    food.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < food.length; i++) {
        for (let j = maxPower; j >= 0; j--) {
            let target = Math.pow(2, j) - food[i];

            if (target < food[i] || target < 0) {
                break;
            }

            if (foodCountMap.has(target)) {
                let count = foodCountMap.get(target);

                if (target === food[i]) {
                    res = (res + (1 + count - 1) * (count - 1) / 2) % mod;
                } else {
                    res = (res + count * foodCountMap.get(food[i])) % mod;
                }
            }
        }
    }

    return res;
};
