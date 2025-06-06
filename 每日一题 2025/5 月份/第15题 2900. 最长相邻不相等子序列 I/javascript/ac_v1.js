/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const total = words.length;
    const res = [];

    res.push(words[0]);
    for (let i = 1; i < total; i++) {
        if (groups[i] !== groups[i - 1]) {
            res.push(words[i]);
        }
    }

    return res;
};
