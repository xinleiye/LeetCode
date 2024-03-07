/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const res = [];
    let cur = 0;

    for (const n of word) {
        cur = (cur * 10 + Number(n)) % m;
        res.push(cur === 0 ? 1 : 0);
    }

    return res;
};
