/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const wordMap = new Map();
    for (const w of words) {
        wordMap.set(w, (wordMap.get(w) || 0) + 1);
    }

    let odd = false;
    let res = 0;
    wordMap.forEach((c, w) => {
        const reverse = w[1] + w[0];
        if (w === reverse) {
            res += Math.floor(c / 2) * 4;
            if (c % 2 === 1) {
                odd = true;
            }
        } else if (w < reverse) {
            res += Math.min(c, wordMap.get(reverse) || 0) * 4;
        }
    });
    if (odd) {
        res += 2;
    }

    return res;
};
