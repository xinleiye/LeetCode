/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;

    for (const ch of s) {
        if (ch === letter) {
            count++;
        }
    }

    return Math.floor(count * 100 / s.length);
};
