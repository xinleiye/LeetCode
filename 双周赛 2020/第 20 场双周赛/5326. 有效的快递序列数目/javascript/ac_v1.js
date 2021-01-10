/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let res = 1;
    let mod = 1e9 + 7;

    for (let i = 1; i <= n; i++) {
        res = res * i * (2 * i - 1);
        res = res % mod;
    }

    return res;
};
