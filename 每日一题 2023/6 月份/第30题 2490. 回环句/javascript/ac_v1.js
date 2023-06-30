/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(" ");
    let pre = words[words.length - 1][words[words.length - 1].length - 1];

    for (const w of words) {
        if (w[0] !== pre) {
            return false;
        }
        pre = w[w.length - 1];
    }

    return true;
};
