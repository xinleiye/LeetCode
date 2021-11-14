/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const charCount = new Array(26).fill(0);
    const length = word1.length;

    for (let i = 0; i < length; i++) {
        charCount[word1.charCodeAt(i) - 97]++;
        charCount[word2.charCodeAt(i) - 97]--;
    }
    for (const count of charCount) {
        if (Math.abs(count) > 3) {
            return false;
        }
    }
    
    return true;
};
