/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const res = [];
    const keyIndexSet = new Set();

    nums.forEach((num, index) => {
        if (num === key) {
            keyIndexSet.add(index);
        }
    });
    nums.forEach((num, index) => {
        for (i = index - k >= 0 ? index - k : 0, len = index + k; i <= len; i++) {
            if (keyIndexSet.has(i)) {
                res.push(index);
                break;
            }
        }
    });
    
    return res;
};
