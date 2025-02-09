/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const total = nums.length;
    if (total <= 2) {
        return total;
    }

    let slow = 2;
    let fast = 2;
    while (fast < total) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }

    return slow;
};
