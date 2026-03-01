/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    const total = s.length;
    let carry = 0;
    let res = total - 1;

    for (let i = total - 1; i > 0; i--) {
        let sum = Number(s[i]) + carry;

        if (sum % 2) {
            res++;
            sum++;
        }
        carry = Math.floor(sum / 2);
    }

    return res + carry;
};
