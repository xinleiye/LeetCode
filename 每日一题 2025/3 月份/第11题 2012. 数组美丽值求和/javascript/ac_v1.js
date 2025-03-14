/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    const total = nums.length;
    let preMax = 0;
    const postMin = new Array(total);
    let res = 0;

    postMin[total - 1] = nums[total - 1];
    for (let i = total - 2; i >= 0; i--) {
        postMin[i] = Math.min(postMin[i + 1], nums[i]);
    }
    for (let i = 1; i < total - 1; i++) {
        preMax = Math.max(preMax, nums[i - 1]);
        if (preMax < nums[i] && nums[i] < postMin[i + 1]) {
            res += 2;
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
            res += 1;
        }
    }

    return res;
};
