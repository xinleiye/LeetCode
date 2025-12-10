/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    let res = 1;
    const MOD = 1e9 + 7;
    const first = complexity[0];
    const total = complexity.length;

    for (let i = 1; i < total; i++) {
        if (complexity[i] <= first) {
            return 0;
        }
        res = (res * i) % MOD;
    }

    return res;
};
