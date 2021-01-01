/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = 0;
    let hasOddChar = false;
    let charMap = new Map();

    for (let i = 0, len = s.length; i < len; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    charMap.forEach((val, key) => {
        if (val % 2 === 0) {
            res += val;
        } else {
            res += val - 1;
            hasOddChar = true;
        }
    });

    return hasOddChar ? res + 1 : res;
};
