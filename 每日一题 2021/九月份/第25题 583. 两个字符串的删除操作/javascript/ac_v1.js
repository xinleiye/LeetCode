/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const cache = new Array(word1.length + 1).fill(0);
    const len1 = word1.length;
    const len2 = word2.length;

    for (let i = 0; i <= len1; i++) {
        cache[i] = new Array(len2 + 1).fill(0);
    }
    for (let i = 1; i <= len1; i++) {
        cache[i][0] = i;
    }
    for (let i = 1; i <= len2; i++) {
        cache[0][i] = i;
    }
    for (let i = 1; i <= len1; i++) {
        const ch1 = word1[i -1];

        for (let j = 1; j <= len2; j++) {
            if (ch1 === word2[j - 1]) {
                cache[i][j] = cache[i - 1][j - 1];
            } else {
                cache[i][j] = Math.min(cache[i - 1][j], cache[i][j - 1]) + 1;
            }
        }
    }

    return cache[len1][len2];
};
