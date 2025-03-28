/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const chSet = new Set();

    for (const ch of s) {
        chSet.add(ch);
    }

    return chSet.size;
};
