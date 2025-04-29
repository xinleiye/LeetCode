/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = 0;
    for (const n of nums) {
        max = Math.max(max, n);
    }

    let res = 0;
    let right = 0;
    let left = 0;
    let count = 0;
    const total = nums.length;
    while (right < total) {
        if (nums[right] === max) {
            count++;
        }
        while (count >= k) {
            if (nums[left] === max) {
                count--;
            }
            left++;
        }
        res += left;
        right++;
    }

    return res;
};
