/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charNum = new Array(26).fill(0);

    words.forEach(word => {
        for (let i = 0, len = word.length; i < len; i++) {
            charNum[word.charCodeAt(i) - 97]++;
        }
    });
    for (let i = 0; i < 26; i++) {
        if (charNum[i] % words.length) {
            return false;
        }
    }

    return true;
};
