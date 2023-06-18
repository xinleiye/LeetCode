/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const wordCount = words.length;
    const queryCount = queries.length;
    const dp = new Array(wordCount + 1).fill(0);
    const res = new Array(queryCount);
    const vowel = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < wordCount; i++) {
        const w = words[i];

        if (vowel.indexOf(w[0]) >= 0 && vowel.indexOf(w[w.length - 1]) >= 0) {
            dp[i + 1] = dp[i] + 1;
        } else {
            dp[i + 1] = dp[i];
        }
    }
    for (let i = 0; i < queryCount; i++) {
        const [s, e] = queries[i];

        res[i] = dp[e + 1] - dp[s];
    }

    return res;
};
