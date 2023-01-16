/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum < x) {
        return -1;
    }

    const total = nums.length;
    let res = total + 1;
    let lSum = 0;
    let rSum = sum;
    let right = 0;
    for (let left = -1; left < total; left++) {
        if (left !== -1) {
            lSum += nums[left];
        }
        while (right < total && lSum + rSum > x) {
            rSum -= nums[right];
            right++;
        }
        if (lSum + rSum === x) {
            res = Math.min(res, (left + 1) + (total - right));
        }
    }

    return res === total + 1 ? -1 : res;
};
