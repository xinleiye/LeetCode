/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let res = 0;
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        let left = i - 1;
        let right = i + 1;

        while (left >= 0 && nums[left] === nums[i]) {
            left--;
        }
        while (right < total && nums[right] === nums[i]) {
            right++;
        }
        if ((left >= 0 && right < total) &&
            ((nums[left] < nums[i] && nums[right] < nums[i]) || (nums[left] > nums[i] && nums[right] > nums[i])) &&
            (nums[i] !== nums[i - 1])) {
            res++;
        }
    }

    return res;
};
