/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let n1 = 0;
    let n2 = 1;
    let index = 1;
    const MOD = 1e9 + 7;

    while (index <= n) {
        const n = (n1 + n2) % MOD;

        n1 = n2;
        n2 = n;
        index++;
    }

    return n1;
};
