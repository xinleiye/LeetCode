/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const res = [];
    let sum = 0;
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + carry;
        carry = sum > 9 ? 1 : 0;
        res.unshift(sum % 10);
    }
    if (carry) {
        res.unshift(carry);
    }

    return res;
};
