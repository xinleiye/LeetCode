/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowelMap = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };
    let res = 0;

    for (let i = left; i <= right; i++) {
        const w = words[i];

        if (vowelMap[w[0]] && vowelMap[w[w.length - 1]]) {
            res++;
        }
    }

    return res;
};
