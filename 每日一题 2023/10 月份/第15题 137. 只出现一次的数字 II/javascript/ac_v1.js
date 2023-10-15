/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const freqMap = new Map();
    for (const n of nums) {
        if (freqMap.has(n)) {
            freqMap.set(n, freqMap.get(n) + 1);
        } else {
            freqMap.set(n, 1);
        }
    }

    let res = 0;
    freqMap.forEach((val, key) => {
        if (val === 1) {
            res = key;
        }
    });

    return res;
};
