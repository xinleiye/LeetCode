/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        const sum = left * left + right * right;

        if (sum > c) {
            right--;
        } else if (sum < c) {
            left++;
        } else {
            return true;
        }
    }

    return false;
};
