/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = 0;

    for (const w of words) {
        if (w.indexOf(pref) === 0) {
            res++;
        }
    }

    return res;
};
