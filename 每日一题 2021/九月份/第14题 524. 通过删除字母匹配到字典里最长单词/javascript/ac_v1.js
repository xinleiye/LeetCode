/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    const sLength = s.length;

    dictionary.sort((w1, w2) => {
        let l1 = w1.length;
        let l2 = w2.length;

        if (l1 !== l2) {
            return l2 - l1;
        } else {
            if (w1 > w2) {
                return 1;
            } else if (w1 < w2) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    for (const w of dictionary) {
        let i1 = 0;
        let i2 = 0;

        while (i1 < w.length && i2 < sLength) {
            if (w[i1] === s[i2]) {
                i1++;
            }
            i2++;
        }

        if (i1 === w.length) {
            return w;
        }
    }

    return "";
};
