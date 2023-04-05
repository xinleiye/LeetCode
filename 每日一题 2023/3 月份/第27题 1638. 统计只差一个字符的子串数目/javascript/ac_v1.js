/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let res = 0;
    const lenS = s.length;
    const lenT = t.length;

    for (let i = 0; i < lenT; i++) {
        for (let j = 0; j < lenS; j++) {
            let diff = 0;

            for (let k = 0; (i + k) < lenT && (j + k) < lenS; k++) {
                if (t[i + k] !== s[j + k]) {
                    diff++;
                }
                if (diff > 1) {
                    break;
                } else if (diff === 1) {
                    res++;
                }
            }
        }
    }

    return res;
};
