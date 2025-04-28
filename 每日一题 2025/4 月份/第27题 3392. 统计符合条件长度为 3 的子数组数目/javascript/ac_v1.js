/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let res = 0;
    const total = nums.length;

    for (let i = 2; i < total; i++) {
        if ((nums[i] + nums[i - 2]) * 2 === nums[i - 1]) {
            res++;
        }
    }

    return res;
};
