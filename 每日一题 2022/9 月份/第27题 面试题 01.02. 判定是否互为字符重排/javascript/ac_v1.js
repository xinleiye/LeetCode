/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const length = s1.length;
    const charCount = new Array(26).fill(0);
    for (let i = 0; i < length; i++) {
        charCount[s1.charCodeAt(i) - 97]++;
        charCount[s2.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        if (charCount[i] !== 0) {
            return false;
        }
    }

    return true;
};
