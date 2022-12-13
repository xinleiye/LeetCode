/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const charCount = new Array(26).fill(0);

    for (const ch of sentence) {
        charCount[ch.charCodeAt() - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (charCount[i] === 0) {
            return false;
        }
    }

    return true;
};
