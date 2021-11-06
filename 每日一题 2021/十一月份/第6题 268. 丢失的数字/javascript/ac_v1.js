/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;

    nums.forEach(num => {
        sum += num;
    });

    return (0 + nums.length) * (nums.length + 1) / 2 - sum;
};
