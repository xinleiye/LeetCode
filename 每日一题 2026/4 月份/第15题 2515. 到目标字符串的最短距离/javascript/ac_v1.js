/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let res = words.length;
    const total = words.length;

    for (let i = 0; i < total; i++) {
        if (words[i] === target) {
            res = Math.min(res, Math.abs(i - startIndex), Math.abs(total - Math.abs(i - startIndex)));
        }
    }

    return res === total ? -1 : res;
};
