/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let res = 0;
    let left = 0;
    let right = nums.length - 1;
    let sum = 0;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });
    while (left < right) {
        sum = nums[left] + nums[right];
        if (sum > res) {
            res = sum;
        }
        left++;
        right--;
    }

    return res;
};
