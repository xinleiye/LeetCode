/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const res = [];
    const length = nums.length;
    let index = 0;

    nums.sort((n1, n2) => n1 - n2);
    while (index < length) {
        if (nums[index + 2] - nums[index] > k) {
            return [];
        }
        res.push(nums.slice(index, index + 3));
        index += 3;
    }

    return res;
};
