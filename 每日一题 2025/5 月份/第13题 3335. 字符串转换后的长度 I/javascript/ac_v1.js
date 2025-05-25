/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    let chCount = new Array(26).fill(0);
    for (const ch of s) {
        chCount[ch.charCodeAt(0) - 97]++;
    }

    const MOD = 1e9 + 7;
    for (let i = 0; i < t; i++) {
        const next = new Array(26);

        next[0] = chCount[25];
        next[1] = (chCount[25] + chCount[0]) % MOD;
        for (let j = 2; j < 26; j++) {
            next[j] = chCount[j - 1];
        }
        chCount = next;
    }

    let res = 0;
    for (let i = 0; i < 26; i++) {
        res = (res + chCount[i]) % MOD;
    }

    return res;
};
