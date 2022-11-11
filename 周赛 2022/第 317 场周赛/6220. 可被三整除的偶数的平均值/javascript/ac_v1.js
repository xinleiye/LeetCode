/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;

    for (const n of nums) {
        if (n % 6 === 0) {
            sum += n;
            count++;
        }
    }

    return count > 0 ? Math.floor(sum / count) : 0;
};
