/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const res = [];
    const isMatch = (word, pattern) => {
        const charMap = new Map();
        const length = word.length;

        for (let i = 0; i < length; i++) {
            const s = word[i];
            const t = pattern[i];

            if (!charMap.has(s)) {
                charMap.set(s, t);
            } else if (charMap.get(s) !== t) {
                return false;
            }
        }

        return true;
    };

    for (const word of words) {
        if (isMatch(word, pattern) && isMatch(pattern, word)) {
            res.push(word);
        }
    }

    return res;
};
