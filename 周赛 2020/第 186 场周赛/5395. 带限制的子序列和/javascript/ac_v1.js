/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let res = nums[0];
    let sumK = [];
    let sum = nums[0];

    sumK.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sumK[0] + nums[i]);
        res = Math.max(res, sum);

        if (sumK.length === k) {
            sumK.shift();
        }
        while (sumK.length > 0 && sumK[sumK.length - 1] < sum) {
            sumK.pop();
        }
        sumK.push(sum);
    }

    return res;
};
