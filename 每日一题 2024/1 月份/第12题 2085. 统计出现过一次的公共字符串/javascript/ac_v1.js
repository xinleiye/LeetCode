/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let res = 0;
    const wordMap1 = new Map();
    const wordMap2 = new Map();

    for (const w of words1) {
        wordMap1.set(w, (wordMap1.get(w) || 0) + 1);
    }
    for (const w of words2) {
        wordMap2.set(w, (wordMap2.get(w) || 0) + 1);
    }
    wordMap1.forEach((count, w) => {
        if (count === 1 && wordMap2.get(w) === 1) {
            res++;
        }
    });

    return res;
};
