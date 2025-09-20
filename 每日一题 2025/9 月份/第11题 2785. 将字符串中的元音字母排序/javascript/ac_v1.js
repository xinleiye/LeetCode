/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = [];
    const pos = [];
    const length = s.length;
    const res = [];
    const VOWEL = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < length; i++) {
        if (VOWEL.indexOf(s[i]) >= 0) {
            vowels.push(s[i]);
            pos.push(i);
        }
        res.push(s[i]);
    }
    vowels.sort();

    const vowelCount = vowels.length;
    for (let i = 0; i < vowelCount; i++) {
        res[pos[i]] = vowels[i];
    }

    return res.join("");
};
