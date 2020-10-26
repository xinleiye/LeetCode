/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = new Array(nums.length);
    let indexArr = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        indexArr[i] = i;
    }

    indexArr.sort((val1, val2) => {
        return nums[val1] - nums[val2];
    });

    res[indexArr[0]] = 0;
    for (let i = 1; i < nums.length; i++) {
        res[indexArr[i]] = nums[indexArr[i]] === nums[indexArr[i - 1]] ? res[indexArr[i - 1]] : i;
    }

    return res;
};
