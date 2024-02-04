/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const total = words.length;

    if (total !== s.length) {
        return false;
    }
    for (let i = 0; i < total; i++) {
        if (words[i][0] !== s[i]) {
            return false;
        }
    }

    return true;
};
