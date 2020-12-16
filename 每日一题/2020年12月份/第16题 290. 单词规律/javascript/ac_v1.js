/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const length = pattern.length;
    let words = s.split(" ");
    let wordsMap = new Map();
    let patternSet = new Set();

    if (words.length !== length) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        if (wordsMap.has(words[i])) {
            if (wordsMap.get(words[i]) !== pattern[i]) {
                return false;
            }
        } else {
            if (patternSet.has(pattern[i])) {
                return false;
            }
            wordsMap.set(words[i], pattern[i]);
            patternSet.add(pattern[i]);
        }
    }

    return true;
};
