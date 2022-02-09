/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let res = 0;
    const numMap = new Map();

    nums.forEach(num => {
        res += (numMap.get(num - k) || 0) + (numMap.get(num + k) || 0);
        numMap.set(num, (numMap.get(num) || 0) + 1);
    });

    return res;
};
