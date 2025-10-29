/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const res = [];
    const total = words.length;
    let index = 0;

    while (index < total) {
        const cur = words[index];

        res.push(cur);
        index++;
        while (index < total && isSame(cur, words[index])) {
            index++;
        }
    }

    return res;
};

function isSame(word1, word2) {
    const chars = new Array(26).fill(0);

    for(const ch of word1) {
        chars[ch.charCodeAt(0) - 97]++;
    }
    for(const ch of word2) {
        chars[ch.charCodeAt(0) - 97]--;
    }

    return chars.every(c => c === 0);
}
