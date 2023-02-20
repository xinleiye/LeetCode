/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let res = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        res += Number(String(nums[left]) + nums[right]);
        left++;
        right--;
    }
    if (left === right) {
        res += nums[left];
    }

    return res;
};
