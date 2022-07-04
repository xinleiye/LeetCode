/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    let res = 0;
    const MOD = 1e9 + 7;
    const awareArr = new Array(n).fill(0);

    // 知道，可以分享
    awareArr[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i + delay, len = Math.min(i + forget, n); j < len; j++) {
            awareArr[j] = (awareArr[j] + awareArr[i]) % MOD;
        }
    }
    // 知道，不可分享
    for (let i = n - delay; i < n; i++) {
        res = (res + awareArr[i]) % MOD;
    }

    return (res + awareArr[n - 1]) % MOD;
};
