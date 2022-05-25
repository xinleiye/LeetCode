/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    let left = 1;
    let right = m * n;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        let count = Math.floor(mid / n) * n;

        for (let i = Math.floor(mid / n) + 1; i <= m; i++) {
            count += Math.floor(mid / i);
        }
        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
