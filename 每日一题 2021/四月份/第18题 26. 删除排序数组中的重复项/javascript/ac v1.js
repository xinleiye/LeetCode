/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let res = 0;
    let index = 1;
    const length = nums.length;

    while (index < length) {
        if (nums[index] !== nums[res]) {
            res++;
            nums[res] = nums[index];
        }
        index++;
    }

    return res + 1;
};
