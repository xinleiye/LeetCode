/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const length = word.length;
    let cur = 0;
    const res = new Array(length);

    for (let i = 0; i < length; i++) {
        cur = (cur * 10 + Number(word[i])) % m;
        res[i] = cur === 0 ? 1 : 0;
    }

    return res;
};
