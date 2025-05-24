/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const res = [];
    const total = words.length;

    for (let i = 0; i < total; i++) {
        if (words[i].indexOf(x) >= 0) {
            res.push(i);
        }
    }

    return res;
};
