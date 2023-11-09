/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let res = 0;
    const total = s.length;
    let pos = 0;

    while (pos < total) {
        if (s[pos] === "0") {
            let zero = 0;
            let one = 0;

            while (s[pos] === "0") {
                zero++;
                pos++;
            }
            while (s[pos] === "1") {
                one++;
                pos++;
            }
            res = Math.max(res, Math.min(zero, one) * 2);
        } else {
            pos++;
        }
    }

    return res;
};
