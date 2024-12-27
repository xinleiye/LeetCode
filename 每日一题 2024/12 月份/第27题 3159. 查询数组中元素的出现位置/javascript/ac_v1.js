/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const posArr = [];
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        if (nums[i] === x) {
            posArr.push(i);
        }
    }

    const res = [];
    for (const q of queries) {
        res.push(q <= posArr.length ? posArr[q - 1] : -1);
    }

    return res;
};
