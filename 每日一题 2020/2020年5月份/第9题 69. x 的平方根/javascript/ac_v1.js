/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        let mid = (left + right) >>> 1;
        let mul = mid * mid;

        if (mul === x) {
            return mid;
        }
        if (mul > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};
