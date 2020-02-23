/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let res = 0;
    let charPos = new Map();

    for (let i = 0, len = s.length; i < len; i++) {
        charPos.set(s[i], i);
        if (charPos.size === 3) {
            res += Math.min(charPos.get("a"), charPos.get("b"), charPos.get("c")) + 1;
        }
    }

    return res;
};
