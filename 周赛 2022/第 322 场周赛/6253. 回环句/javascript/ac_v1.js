/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(" ");
    let preCh = words[0][words[0].length - 1];

    words.push(words[0]);
    for (let i = 1, len = words.length; i < len; i++) {
        if (preCh !== words[i][0]) {
            return false;
        }
        preCh = words[i][words[i].length - 1]
    }

    return true;
};
