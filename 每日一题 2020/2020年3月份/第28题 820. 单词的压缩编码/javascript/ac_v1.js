/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let res = 0;
    let wordSet = new Set(words);

    for (let word of wordSet) {
        for (let i = 1, len = word.length; i < len; i++) {
            let subWord = word.slice(i);

            if (wordSet.has(subWord)) {
                wordSet.delete(subWord);
            }
        }
    }

    for (let word of wordSet) {
        res += word.length + 1;
    }

    return res;
};
