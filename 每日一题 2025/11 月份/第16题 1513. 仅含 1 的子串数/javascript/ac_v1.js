/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let res = 0;
    const MOD = 1e9 + 7;
    let count = 0;

    for (const c of s) {
        if (c === "1") {
            count++;
        } else {
            res = (res + count * (count + 1) / 2) % MOD;
            count = 0;
        }
    }
    res = (res + count * (count + 1) / 2) % MOD;

    return res;
};
