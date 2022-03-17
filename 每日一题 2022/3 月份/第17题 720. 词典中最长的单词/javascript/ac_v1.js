/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((w1, w2) => {
        if (w1.length === w2.length) {
            return w1 > w2 ? -1 : 1;
        } else {
            return w1.length - w2.length;
        }
    });

    let res = "";
    const wordsSet = new Set();

    wordsSet.add("");
    for(const w of words) {
        if (wordsSet.has(w.slice(0, -1))) {
            wordsSet.add(w);
            res = w;
        }
    }

    return res;
};
