/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    let res = nums.length;
    let left = 0;
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        while (nums[left] * k < nums[i]) {
            left++;
        }
        res = Math.min(res, total - (i - left + 1));
    }

    return res;
};
