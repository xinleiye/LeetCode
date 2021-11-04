/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left  = 0;
    let right = num;

    while (left <= right) {
        const mid = (right + left) >>> 1;
        const square = mid * mid;

        if (square > num) {
            right = mid - 1;
        } else if (square < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};
