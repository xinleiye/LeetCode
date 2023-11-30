/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const word1Char = new Array(26).fill(0);
    const word2Char = new Array(26).fill(0);

    if (word1.length !== word2.length) {
        return false;
    }

    for (let i = 0; i < word1.length; i++) {
        word1Char[word1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < word2.length; i++) {
        word2Char[word2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((word1Char[i] > 0 && word2Char[i] === 0) ||
            (word1Char[i] === 0 && word2Char[i] > 0)) {
            return false;
        }
    }

    word1Char.sort((val1, val2) => {
        return val1 - val2;
    });
    word2Char.sort((val1, val2) => {
        return val1 - val2;
    });
    for (let i = 0; i < 26; i++) {
        if (word1Char[i] !== word2Char[i]) {
            return false;
        }
    }

    return true;
};
