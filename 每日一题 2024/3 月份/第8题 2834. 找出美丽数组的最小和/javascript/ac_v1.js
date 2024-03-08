/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    const half = target >>> 1;
    let MOD = 1e9 + 7;

    if (n <= half) {
        return calcSum(1, n) % MOD;
    }

    return (calcSum(1, half) % MOD + calcSum(target, target + n - half - 1) % MOD) % MOD;
};

function calcSum(start, end) {
    return (start + end) * (end - start + 1) / 2;
}
