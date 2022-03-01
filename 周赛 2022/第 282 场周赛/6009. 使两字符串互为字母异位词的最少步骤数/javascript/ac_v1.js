/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let res = 0;
    const sCharCount = new Array(26).fill(0);
    const tCharCount = new Array(26).fill(0);

    for (const ch of s) {
        sCharCount[ch.charCodeAt(0) - 97]++;
    }
    for (const ch of t) {
        tCharCount[ch.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        res += Math.abs(sCharCount[i] - tCharCount[i]);
    }

    return res;
};
