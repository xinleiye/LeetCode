/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let res = 0;
    const vowel = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }

    for (let i = left; i <= right; i++) {
        const w = words[i];

        if (vowel[w[0]] && vowel[w[w.length - 1]]) {
            res++;
        }
    }
    
    return res;
};
