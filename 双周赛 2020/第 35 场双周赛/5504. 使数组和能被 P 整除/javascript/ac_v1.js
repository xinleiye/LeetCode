/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let res = nums.length + 1;
    let totalSum = 0;
    let sumMod = new Array(nums.length + 1);
    let sumModMap = new Map();

    sumMod[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        sumMod[i + 1] = (nums[i] + sumMod[i]) % p;
    }

    if (totalSum < p) {
        return -1;
    }
    if (sumMod[nums.length] === 0) {
        return 0;
    }

    sumModMap.set(0, 0);
    for (let i = 1; i <= nums.length; i++) {
        let preMod = (sumMod[i] - sumMod[nums.length] + p) % p;

        if (sumModMap.has(preMod)) {
            res = Math.min(res, i - sumModMap.get(preMod));
        }
        sumModMap.set(sumMod[i], i);
    }

    return res >= nums.length ? -1 : res;
};
