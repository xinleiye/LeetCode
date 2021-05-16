/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    let pre = s[0];
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    res += romanMap[pre];
    for (let i = 1; i < s.length; i++) {
        if ((pre === "I" && (s[i] === "V" || s[i] === "X")) ||
            (pre === "X" && (s[i] === "L" || s[i] === "C")) ||
            (pre === "C" && (s[i] === "D" || s[i] === "M"))) {
            res = res - romanMap[pre] + (romanMap[s[i]] - romanMap[pre]);
        } else {
            res += romanMap[s[i]];
            pre = s[i];
        }
    }

    return res;
};
