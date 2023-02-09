/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let chArr = new Array(60).fill(false);

    for (const ch of s) {
        chArr[ch.charCodeAt() - 65] = true;
    }

    for (let i = 25; i >= 0; i--) {
        if (chArr[i] && chArr[i + 32]) {
            return String.fromCharCode(i + 65);
        }
    }

    return "";
};
