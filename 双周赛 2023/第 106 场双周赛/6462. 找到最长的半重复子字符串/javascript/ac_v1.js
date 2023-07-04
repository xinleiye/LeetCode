/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function(s) {
    const total = s.length;
    if (total <= 2) {
        return total;
    }

    let res = 2;
    for (let i = 2; i < total; i++) {
        let pairs = 0;

        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === s[j + 1]) {
                pairs++;
                if (pairs >= 2 || (j + 2 <= i && s[j] === s[j + 2])) {
                    res = Math.max(res, i - j);
                    break;
                }
            }
            res = Math.max(res, i - j + 1);
        }
    }

    return res;
};
