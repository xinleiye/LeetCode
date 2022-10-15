/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const length = s1.length;
    const diff = [];

    for (let i = 0; i < length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
        if (diff.length > 2) {
            return false;
        }
    }
    if (diff.length === 0) {
        return true;
    }
    if (diff.length !== 2) {
        return false;
    }

    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};
