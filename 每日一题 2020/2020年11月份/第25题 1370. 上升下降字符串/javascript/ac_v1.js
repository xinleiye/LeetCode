/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let res = [];
    let charMap = new Map();
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    while (res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (charMap.has(alpha[i]) && charMap.get(alpha[i]) > 0) {
                res.push(alpha[i]);
                charMap.set(alpha[i], charMap.get(alpha[i]) - 1);
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (charMap.has(alpha[i]) && charMap.get(alpha[i]) > 0) {
                res.push(alpha[i]);
                charMap.set(alpha[i], charMap.get(alpha[i]) - 1);
            }
        }
    }

    return res.join("");
};
