/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let charArr = s.split("");
    const length = s.length;
    const charMap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 1; i < length; i += 2) {
        charArr[i] = charMap[s.charCodeAt(i - 1) - 97 + Number(s[i])];
    }

    return charArr.join("");
};
