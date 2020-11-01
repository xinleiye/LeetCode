/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let res = [];
    let numCountMap = new Map();
    let freqMap = new Map();
    let keys = [];
    
    nums.forEach(val => {
        if (numCountMap.has(val)) {
            numCountMap.set(val, numCountMap.get(val) + 1);
        } else {
            numCountMap.set(val, 1);
        }
    });

    numCountMap.forEach((val, key) => {
        if (freqMap.has(val)) {
            freqMap.get(val).push(key);
        } else {
            freqMap.set(val, [key]);
        }
    });

    freqMap.forEach((val, key) => {
        val.sort((val1, val2) => {
            return val2 - val1;
        });
        keys.push(key);
    });

    keys.sort((val1, val2) => {
        return val1 - val2;
    }).forEach(val => {
        let num = freqMap.get(val);

        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < val; j++) {
                res.push(num[i]);
            }
        }
    });

    return res;
};
