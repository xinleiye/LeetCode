/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charNum = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        charNum[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        charNum[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (charNum[i] === -1) {
            return String.fromCharCode(i + 97);
        }
    }
};
