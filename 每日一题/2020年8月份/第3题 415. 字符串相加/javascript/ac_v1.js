/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = "";
    let add1, add2, sum;
    let carry = 0;
    let maxLen = num1.length > num2.length ? num1.length : num2.length;

    for (let i = 0; i < maxLen; i++) {
        if (i < num1.length) {
            add1 = num1[num1.length - 1 - i];
        } else {
            add1 = 0;
        }
        if (i < num2.length) {
            add2 = num2[num2.length - 1 - i];
        } else {
            add2 = 0;
        }
        sum = (+add1) + (+add2) + carry;
        res = sum % 10 + res;
        carry = Math.floor(sum / 10);
    }
    if (carry) {
        res = carry + res;
    }

    return res;
};
