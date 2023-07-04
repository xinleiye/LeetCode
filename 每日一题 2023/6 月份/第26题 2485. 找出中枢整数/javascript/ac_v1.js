/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let calcSum = (start, end) => {
        return (start + end) * (end - start + 1) / 2;
    };

    for (let i = 1; i <= n; i++) {
        if (calcSum(1, i) === calcSum(i, n)) {
            return i;
        }
    }

    return -1;
};
