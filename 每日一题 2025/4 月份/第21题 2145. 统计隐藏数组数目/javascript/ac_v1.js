/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let preSum = 0;
    let min = 0;
    let max = 0;

    for (const d of differences) {
        preSum += d;
        min = Math.min(min, preSum);
        max = Math.max(max, preSum);
        if (max - min > upper - lower) {
            return 0;
        }
    }

    return upper - max - (lower - min) + 1;
};
