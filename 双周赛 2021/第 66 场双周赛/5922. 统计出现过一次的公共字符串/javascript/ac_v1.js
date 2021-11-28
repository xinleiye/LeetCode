/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let res = 0;
    const wordsMap1 = new Map();
    const wordsMap2 = new Map();

    words1.forEach(w => {
        if (wordsMap1.has(w)) {
            wordsMap1.set(w, wordsMap1.get(w) + 1);
        } else {
            wordsMap1.set(w, 1);
        }
    });
    words2.forEach(w => {
        if (wordsMap2.has(w)) {
            wordsMap2.set(w, wordsMap2.get(w) + 1);
        } else {
            wordsMap2.set(w, 1);
        }
    });
    wordsMap1.forEach((n, w) => {
        if (n === 1) {
            if (wordsMap2.has(w) && wordsMap2.get(w) === 1) {
                res++;
            }
        }
    });

    return res;
};
