/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str = "";

    for (let word of words) {
        if (str.length < s.length) {
            str += word;
        } else if (str.length > s.length) {
            return false;
        } else {
            return str === s;
        }
    }

    return str === s;
};
