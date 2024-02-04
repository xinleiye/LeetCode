/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const firstChars = [];

    for (const w of words) {
        firstChars.push(w[0]);
    }

    return firstChars.join("") === s;
};
