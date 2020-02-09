/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let res = 0;
    let charMap = new Array(26).fill(0);

    for (let i = 0, len = s.length; i < len; i++) {
        charMap[s.charCodeAt(i) - 97]++;
        charMap[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        res += Math.abs(charMap[i]);
    }

    return res / 2;
};
