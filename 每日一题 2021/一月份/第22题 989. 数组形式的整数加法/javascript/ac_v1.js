/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const res = [];
    let indexA = A.length - 1;
    let carry = 0;

    while (K && indexA >= 0) {
        const sum = K % 10 + carry + A[indexA];

        res.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        indexA--;
        K = Math.floor(K / 10);
    }

    while (indexA >= 0) {
        const sum = A[indexA] + carry;

        res.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        indexA--;
    }

    while (K) {
        const sum = K % 10 + carry;

        res.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        K = Math.floor(K / 10);
    }

    if (carry) {
        res.unshift(carry);
    }

    return res;
};
