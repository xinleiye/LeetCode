/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let res = -1;
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(searchWord) === 0) {
            res = i + 1;
            break;
        }
    }

    return res;
};
