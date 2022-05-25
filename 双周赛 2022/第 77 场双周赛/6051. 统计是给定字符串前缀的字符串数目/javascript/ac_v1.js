/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let res = 0;

    for (const w of words) {
        if (s.substr(0, w.length) === w) {
            res++;
        }
    }

    return res;
};
