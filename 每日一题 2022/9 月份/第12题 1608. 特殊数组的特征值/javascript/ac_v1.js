/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    const total = nums.length;

    nums.sort((n1, n2) => n2 - n1);
    for (let i = 1;  i <= total; i++) {
        if (nums[i - 1] >= i && (i === total || nums[i] < i)) {
            return i;
        }
    }

    return -1;
};
