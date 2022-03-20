/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let res = 0;
    const total = nums.length;
    let index = 1;

    while (index < total - 1) {
        let left = index - 1;
        let right = index + 1;

        while (right < total - 1 && nums[index] === nums[right]) {
            right++;
        }
        if ((nums[left] > nums[index] && nums[right] > nums[index]) ||
            (nums[left] < nums[index] && nums[right] < nums[index])) {
            res++;
        }
        index = right;
    }

    return res;
};
