/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let indexA = a.length - 1;
    let indexB = b.length - 1;
    const res = [];

    while (indexA >= 0 || indexB >= 0) {
        let na = indexA >= 0 ? Number(a[indexA]) : 0;
        let nb = indexB >= 0 ? Number(b[indexB]) : 0;
        const sum = na + nb + carry;

        res.unshift(sum % 2);
        carry = sum >>> 1;
        indexA--;
        indexB--;
    }
    if (carry) {
        res.unshift(carry);
    }

    return res.join("");
};
