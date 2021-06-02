/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const restMap = new Map();
    const length = nums.length;
    let rest = 0;

    if (length < 2) {
        return false;
    }
    restMap.set(0, -1);
    for (let i = 0; i < length; i++) {
        rest = (rest + nums[i]) % k;
        if (restMap.has(rest)) {
            if (i - restMap.get(rest) >= 2) {
                return true;
            }
        } else {
            restMap.set(rest, i);
        }
    }

    return false;
};
