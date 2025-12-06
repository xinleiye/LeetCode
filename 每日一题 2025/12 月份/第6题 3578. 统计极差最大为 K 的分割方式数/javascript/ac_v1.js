/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
    const MOD = 1e9 + 7;
    const total = nums.length;
    const dp = new Array(total + 1).fill(0);
    const minQueue = [];
    const maxQueue = [];
    let left = 0;
    let preSum = 0;

    dp[0] = 1;
    for (let i = 0; i < total; i++) {
        preSum += dp[i];
        while (minQueue.length && nums[minQueue[minQueue.length - 1]] >= nums[i]) {
            minQueue.pop();
        }
        minQueue.push(i);
        while (maxQueue.length && nums[maxQueue[maxQueue.length - 1]] <= nums[i]) {
            maxQueue.pop();
        }
        maxQueue.push(i);
        while (minQueue.length && maxQueue.length && nums[maxQueue[0]] - nums[minQueue[0]] > k) {
            preSum -= dp[left];
            left++;
            if (minQueue[0] < left) {
                minQueue.shift();
            }
            if (maxQueue[0] < left) {
                maxQueue.shift();
            }
        }
        dp[i + 1] = preSum % MOD;
    }

    return dp[total];
};
