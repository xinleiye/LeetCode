/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let res = 0;

    for (const str of patterns) {
        if (word.indexOf(str) >= 0) {
            res++;
        }
    }
    
    return res;
};
