/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let res = s.length;
    const charNum = new Array(26).fill(0);
    const charIndexMap = new Map();

    for (let i = 0; i < s.length; i++) {
        charNum[s.charCodeAt(i) - 97]++;
        if (!charIndexMap.has(s[i])) {
            charIndexMap.set(s[i], i);
        }
    }

    for (let i = 0; i < 26; i++) {
        if (charNum[i] === 1) {
            res = Math.min(charIndexMap.get(String.fromCharCode(i + 97)), res);
        }
    }

    return res === s.length ? -1 : res;
};
