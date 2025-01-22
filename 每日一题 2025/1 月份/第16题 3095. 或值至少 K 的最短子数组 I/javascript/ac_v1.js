/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    let res = Infinity;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        const cur = nums[i];

        if (cur >= k) {
            return 1;
        }
        for (let j = i - 1; j >= 0 && (nums[j] | cur) !== nums[j]; j--) {
            nums[j] |= cur;
            if (nums[j] >= k) {
                res = Math.min(res, i - j + 1);
            }
        }
    }

    return res === Infinity ? -1 : res;
};
