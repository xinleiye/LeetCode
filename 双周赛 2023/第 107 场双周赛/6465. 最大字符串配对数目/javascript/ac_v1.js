/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let res = 0;
    const wordSet = new Set();

    for (const w of words) {
        wordSet.add(w);
    }
    for (const w of words) {
        const reverseW = w[1] + w[0];

        if (w !== reverseW && wordSet.has(reverseW)) {
            res++;
            wordSet.delete(reverseW);
        }
        wordSet.delete(w);
    }

    return res;
};
