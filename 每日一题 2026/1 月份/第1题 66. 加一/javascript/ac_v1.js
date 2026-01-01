/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const total = digits.length;
    const res = new Array(total);
    let carry = 1;
    let sum = 0;

    for (let i = total - 1; i >= 0; i--) {
        sum = digits[i] + carry;
        res[i] = sum % 10;
        carry = sum >= 10 ? 1 : 0;
    }
    if (carry) {
        res.unshift(carry);
    }

    return res;
};
