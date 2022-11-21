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

    const res = new Array(total);
    let left = 0;
    let right = total - 1;
    for (const n of nums) {
        if (n !== 0) {
            res[left] = n;
            left++;
        } else {
            res[right] = 0;
            right--;
        }
    }

    return res;
};
