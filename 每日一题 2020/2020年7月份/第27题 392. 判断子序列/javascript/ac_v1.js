/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let lenS = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[lenS] === t[i]) {
            lenS++;
        }
        if (lenS === s.length) {
            break;
        }
    }

    return lenS === s.length;
};
