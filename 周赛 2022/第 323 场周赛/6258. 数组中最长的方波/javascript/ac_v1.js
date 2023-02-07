/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    const numSet = new Set();
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        numSet.add(nums[i]);
    }

    let res = -1;
    for (const n of nums) {
        const num = [];
        let cur = n;
        while (numSet.has(cur)) {
            num.push(cur);
            cur = cur * cur;
        }
        if (num.length > 1) {
            res = Math.max(res, num.length);
        }
    }

    return res;
};
