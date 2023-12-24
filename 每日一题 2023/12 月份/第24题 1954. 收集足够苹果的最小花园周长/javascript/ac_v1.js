/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
    let left = 1;
    let right = 1e5;
    let res = 0;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (2 * mid * (mid + 1) * (mid * 2 + 1) >= neededApples) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res * 8;
};
