/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }

    let hasVowel = false;
    let hasConsonant = false;
    const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (const ch of word) {
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            if (VOWELS.indexOf(ch) >= 0) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        } else if (ch < "0" || ch > "9") {
            return false;
        }
    }

    return hasVowel && hasConsonant;
};
