/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length);
    let multiFromEnd = new Array(nums.length + 1);
    let multiFromStart = new Array(nums.length + 1);

    multiFromEnd[multiFromEnd.length - 1] = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        multiFromEnd[i] = nums[i] * multiFromEnd[i + 1];
    }

    multiFromStart[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        multiFromStart[i + 1] = nums[i] * multiFromStart[i];
    }

    for (let i = 1; i <= nums.length; i++) {
        res[i - 1] = multiFromStart[i - 1] * multiFromEnd[i];
    }

    return res;
};
