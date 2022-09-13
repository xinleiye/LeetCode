/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let index = 0;
    const res = new Array(n);

    for (let i = 1; i < n - k; i++) {
        res[index] = i;
        index++;
    }
    for (let i = n - k, j = n; i <= j; i++, j--) {
        res[index] = i;
        index++;
        if (i !== j) {
            res[index] = j;
            index++;
        }
    }

    return res;
};
