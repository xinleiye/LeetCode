/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let res = 0;
    let numsMap = new Map();
    let numsSet = new Set();
    
    nums.forEach(val => {
        if (numsSet.has(val)) {
            numsMap.set(val, numsMap.get(val) + 1);
        } else {
            numsSet.add(val);
            numsMap.set(val, 1);
        }
    });

    numsMap.forEach((val, key) => {
        let diff = k - key;

        if (numsSet.has(diff)) {
            if (diff !== key) {
                res += Math.min(val, numsMap.get(diff));
                numsSet.delete(key);
            } else {
                res += val >>> 1;
            }
            numsSet.delete(diff);
        }
    });
    
    return res;
};
