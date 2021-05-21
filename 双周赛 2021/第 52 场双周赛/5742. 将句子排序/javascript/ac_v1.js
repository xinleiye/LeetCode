/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const res = new Array(words.length);

    words.forEach(word => {
        res[Number(word.slice(-1)) - 1] = word.slice(0, word.length - 1);
    });

    return res.join(" ");
};