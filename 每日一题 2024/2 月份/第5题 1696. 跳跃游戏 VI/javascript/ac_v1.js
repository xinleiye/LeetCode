/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    let res;
    let buff = [];

    res = nums[0];
    buff.push([nums[0], 0]);
    for (let i = 1; i < nums.length; i++) {
        while (i - buff[0][1] > k) {
            buff.shift();
        }
        res = buff[0][0] + nums[i];
        while (buff.length > 0 && res >= buff[buff.length - 1][0]) {
            buff.pop();
        }
        buff.push([res, i]);
    }

    return res;
};
