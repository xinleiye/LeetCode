/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const total = s.length;
    let count = 0;
    
    for (const ch of s) {
        if (ch === letter) {
            count++;
        }
    }
    
    return Math.floor(count * 100 / total);
};
