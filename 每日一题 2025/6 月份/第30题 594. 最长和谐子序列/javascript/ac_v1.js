/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const numMap = new Map();
    for (const n of nums) {
        numMap.set(n, (numMap.get(n) || 0) + 1);
    }

    let res = 0;
    numMap.forEach((v, k) => {
        if (numMap.has(k + 1)) {
            res = Math.max(res, numMap.get(k + 1) + v);
        }
    });

    return res;
};
