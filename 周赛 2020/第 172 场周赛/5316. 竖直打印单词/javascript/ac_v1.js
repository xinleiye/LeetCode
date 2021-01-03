/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let res = [];
    let maxLength = 0;
    let words = s.split(" ");
    let wordsCharacter = [];

    for (let item of words) {
        wordsCharacter.push(item.split(""));
        maxLength = Math.max(maxLength, item.length);
    }

    for (let i = 0; i < maxLength; i++) {
        let word = "";

        for (let j = 0, len = words.length; j < len; j++) {
            word += wordsCharacter[j][i] ? wordsCharacter[j][i] : " ";
        }

        res.push(word.trimEnd());
    }

    return res;
};
