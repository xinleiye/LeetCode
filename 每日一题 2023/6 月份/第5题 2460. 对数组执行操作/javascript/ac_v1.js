/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const total = nums.length;
    for (let i = 0; i < total - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    const res = [];
    let left = 0;
    let right = total - 1;
    for (const n of nums) {
        if (n === 0) {
            res[right] = 0;
            right--;
        } else {
            res[left] = n;
            left++;
        }
    }

    return res;
};
