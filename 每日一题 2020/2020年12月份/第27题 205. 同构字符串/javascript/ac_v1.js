/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const length = s.length;
    const charMap = new Map();
    const charSet = new Set();

    for (let i = 0; i < length; i++) {
        if (charMap.has(s[i])) {
            if (charMap.get(s[i]) !== t[i]) {
                return false;
            }
        } else {
            if (charSet.has(t[i])) {
                return false;
            }
            charMap.set(s[i], t[i]);
            charSet.add(t[i]);
        }
    }

    return true;
};
