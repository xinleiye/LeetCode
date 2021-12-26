/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = 0;

    sentences.forEach(item => {
        res = Math.max(res, item.split(" ").length);
    });

    return res;
};
