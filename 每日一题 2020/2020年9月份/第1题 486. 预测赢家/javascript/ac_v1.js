/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let scoreDiff = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        scoreDiff[i] = nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            scoreDiff[j] = Math.max(nums[i] - scoreDiff[j], nums[j] - scoreDiff[j - 1]);
        }
    }

    return scoreDiff[nums.length - 1] >= 0;
};
