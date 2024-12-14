/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    const total = nums.length;
    const res = nums.slice();

    for (let i = 0; i < k; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let index = 0;

        for (let j = 0; j < total; j++) {
            if (res[j] < min) {
                min = res[j];
                index = j;
            }
        }
        res[index] = min * multiplier;
    }

    return res;
};
