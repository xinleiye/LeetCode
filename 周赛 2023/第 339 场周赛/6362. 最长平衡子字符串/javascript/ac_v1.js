/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let res = 0;
    const length = s.length;
    let index = 0;

    while (index < length) {
        if (s[index] === "0") {
            let zero = 0;
            let one = 0;

            while (s[index] === "0") {
                zero++;
                index++;
            }
            while (s[index] === "1") {
                one++;
                index++;
            }
            res = Math.max(res, Math.min(zero, one) * 2);
        } else {
            index++;
        }
    }

    return res;
};
