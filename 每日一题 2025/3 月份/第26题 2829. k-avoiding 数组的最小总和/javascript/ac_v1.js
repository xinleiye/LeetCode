/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    const half = k >>> 1;

    if (n <= half) {
        return sum(1, n);
    } else {
        return sum(1, half) + sum(k, n - half);
    }
};

function sum(first, length) {
    return (first + (first + (length - 1))) * length / 2;
}
