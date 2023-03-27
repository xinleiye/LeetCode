/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let res = 0;
    const lenS = s.length;
    const lenT = t.length;
    const dpl = new Array(lenS + 1).fill(0).map(() => new Array(lenT + 1).fill(0));
    const dpr = new Array(lenS + 1).fill(0).map(() => new Array(lenT + 1).fill(0));

    for (let i = 0; i < lenS; i++) {
        for (let j = 0; j < lenT; j++) {
            dpl[i + 1][j + 1] = s[i] === t[j] ? dpl[i][j] + 1 : 0;
        }
    }
    for (let i = lenS - 1; i >= 0; i--) {
        for (let j = lenT - 1; j >= 0; j--) {
            dpr[i][j] = s[i] === t[j] ? dpr[i + 1][j + 1] + 1 : 0;
        }
    }
    for (let i = 0; i < lenS; i++) {
        for (let j = 0; j < lenT; j++) {
            if (s[i] !== t[j]) {
                res += (dpl[i][j] + 1) * (dpr[i + 1][j + 1] + 1);
            }
        }
    }

    return res;
};
