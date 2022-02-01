/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let min = 1e5;
    let minCount = 0;
    let max = -1e5;
    let maxCount = 0;

    nums.forEach(num => {
        if (num < min) {
            min = num;
            minCount = 1;
        } else if (num === min) {
            minCount++;
        }
        if (num > max) {
            max = num;
            maxCount = 1;
        } else if (num === max) {
            maxCount++;
        }
    });

    return min === max ? 0 : nums.length - minCount - maxCount;
};
