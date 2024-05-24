/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const total = nums.length;
    const res = [];

    for (let i = 0; i < total; i++) {
        while (res.length && total - i + res.length > k) {
            if (res[res.length - 1] > nums[i]) {
                res.pop();
            } else {
                break;
            }
        }
        res.push(nums[i]);
    }
    while (res.length > k) {
        res.pop();
    }

    return res;
};
