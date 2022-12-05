/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let index = 0;
    const total = t.length;

    for (const ch of s) {
        if (ch === t[index]) {
            index++;
        }
        if (index === total) {
            break;
        }
    }

    return total - index;
};
