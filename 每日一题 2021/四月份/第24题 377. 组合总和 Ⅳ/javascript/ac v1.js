/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const length = nums.length;
    const cache = new Array(target + 1).fill(0);

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    cache[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < length; j++) {
            if (nums[j] <= i) {
                cache[i] += cache[i - nums[j]];
            } else {
                break;
            }
        }
    }

    return cache[target];
};
