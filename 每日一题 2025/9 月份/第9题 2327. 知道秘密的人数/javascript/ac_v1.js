/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let res = 0;
    const kown = new Array(n + 1).fill(0);

    kown[1] = 1;
    for (let i = 1; i <= n; i++) {
        const valid = Math.min(n, i + forget - 1);

        for (j = i + delay; j <= valid; j++) {
            kown[j] = (kown[j] + kown[i]) % MOD;
        }
    }
    for(let i = n - forget + 1; i <= n; i++) {
        res = (res + kown[i]) % MOD;
    }

    return res;
};
