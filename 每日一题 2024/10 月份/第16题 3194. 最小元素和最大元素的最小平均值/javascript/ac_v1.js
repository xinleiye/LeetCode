/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let res = 100;
    let left = 0;
    let right = nums.length - 1;

    nums.sort((n1, n2) => n1 - n2);
    while (left < right) {
        res = Math.min(res, nums[left] + nums[right]);
        left++;
        right--;
    }

    return res / 2;
};
