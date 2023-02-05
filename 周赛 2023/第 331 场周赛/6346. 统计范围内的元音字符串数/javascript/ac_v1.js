/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const total = words.length;
    const res = new Array(queries.length);
    const vowel = ["a", "e", "i", "o", "u"];
    const vowelWord = new Array(total + 1).fill(0);

    for (let i = 0; i < total; i++) {
        const w = words[i];

        if (vowel.indexOf(w[0]) >= 0 && vowel.indexOf(w[w.length - 1]) >= 0) {
            vowelWord[i + 1] = vowelWord[i] + 1;
        } else {
            vowelWord[i + 1] = vowelWord[i];
        }
    }
    for (let i = 0, len = queries.length; i < len; i++) {
        const [s, e] = queries[i];

        res[i] = vowelWord[e + 1] - vowelWord[s];
    }

    return res;
};
