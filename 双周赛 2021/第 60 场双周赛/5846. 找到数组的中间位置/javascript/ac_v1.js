/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sumArr = new Array(nums.length + 2).fill(0);
    const length = nums.length;

    sumArr[1] = nums[0];
    for (let i = 1; i < length; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i];
    }

    for (let i = 1; i <= length; i++) {
        if (sumArr[i - 1] === (sumArr[length] - sumArr[i])) {
            return i - 1;
        }
    }

    return -1;
};
