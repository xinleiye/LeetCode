/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let oddSum = 0;
    let evenSum = 0;
    const total = num.length;

    for (let i = 0; i < total; i++) {
        if (i % 2 === 0) {
            evenSum += Number(num[i]);
        } else {
            oddSum += Number(num[i]);
        }
    }

    return oddSum === evenSum;
};
