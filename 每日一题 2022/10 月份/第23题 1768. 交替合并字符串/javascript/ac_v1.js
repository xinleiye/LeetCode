/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const res = new Array(len1 + len2);
    let index = 0;

    while (index < len1 || index < len2) {
        if (index < len1) {
            res.push(word1[index]);
        }
        if (index < len2) {
            res.push(word2[index]);
        }
        index++;
    }

    return res.join("");
};
