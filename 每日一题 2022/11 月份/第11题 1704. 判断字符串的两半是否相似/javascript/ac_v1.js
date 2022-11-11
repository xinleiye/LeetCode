/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const length = s.length;
    const charArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (charArr.indexOf(s[i]) > -1) {
            if (i < length / 2) {
                count++;
            } else {
                count--;
            }
        }
    }

    return count === 0;
};
