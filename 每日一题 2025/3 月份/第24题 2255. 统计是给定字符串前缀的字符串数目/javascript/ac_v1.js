/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let res = 0;

    for (const w of words) {
        if (s.indexOf(w) === 0) {
            res++;
        }
    }

    return res;
};
