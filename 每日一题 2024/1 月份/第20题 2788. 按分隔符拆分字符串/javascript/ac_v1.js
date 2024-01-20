/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const res = [];

    for (const w of words) {
        const chars = [];

        for (const ch of w) {
            if (ch !== separator) {
                chars.push(ch);
            } else if (chars.length) {
                res.push(chars.join(""));
                chars.length = 0;
            }
        }
        if (chars.length) {
            res.push(chars.join(""));
        }
    }

    return res;
};
