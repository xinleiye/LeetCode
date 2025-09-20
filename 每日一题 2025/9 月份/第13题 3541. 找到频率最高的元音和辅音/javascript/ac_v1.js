/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const chMap = new Map();
    for (const ch of s) {
        chMap.set(ch, (chMap.get(ch) || 0) + 1);
    }

    let vowel = 0;
    let consonant = 0;
    const chars = chMap.keys();
    for (const key of chars) {
        if (key === "a" || key === "e" || key === "i" || key === "o" || key === "u") {
            vowel = Math.max(vowel, chMap.get(key));
        } else {
            consonant = Math.max(consonant, chMap.get(key));
        }
    }

    return vowel + consonant;
};
