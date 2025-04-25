/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const total = (new Set(nums)).size;
    const numMap = new Map();
    const length = nums.length;
    let left = 0;
    let right = 0;
    let res = 0;

    while (right < length) {
        numMap.set(nums[right], (numMap.get(nums[right]) || 0) + 1);
        while (numMap.size >= total) {
            const count = numMap.get(nums[left]);

            if (count === 1) {
                numMap.delete(nums[left]);
            } else {
                numMap.set(nums[left], count - 1);
            }
            left++;
        }
        res += left;
        right++;
    }

    return res;
};
