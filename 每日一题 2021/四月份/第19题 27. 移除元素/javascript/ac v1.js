/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let res = 0;
    let index = 0;
    const length = nums.length;

    while (index < length) {
        if (nums[index] !== val) {
            nums[res] = nums[index];
            res++;
        }
        index++;
    }

    return res;
};
