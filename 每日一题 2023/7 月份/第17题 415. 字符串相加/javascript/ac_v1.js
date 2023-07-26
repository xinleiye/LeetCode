/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const n1 = num1.split("").map(n => parseInt(n));
    const n2 = num2.split("").map(n => parseInt(n));
    let index1 = n1.length - 1;
    let index2 = n2.length - 1;
    const res = [];
    let carry = 0;

    while (index1 >= 0 || index2 >= 0) {
        sum = (index1 >= 0 ? n1[index1] : 0) + (index2 >= 0 ? n2[index2] : 0) + carry;
        res.unshift(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        index1--;
        index2--;
    }
    if (carry) {
        res.unshift(carry);
    }

    return res.join("");
};
