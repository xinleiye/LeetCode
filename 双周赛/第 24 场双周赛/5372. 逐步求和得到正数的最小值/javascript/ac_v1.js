/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let minSum = 101;

    nums.forEach(num => {
        sum += num;
        minSum = Math.min(minSum, sum);
    });

    return Math.max(1 - minSum, 1);
};
