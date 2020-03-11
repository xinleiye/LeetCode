/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let totalSum = 0;
    let sum = 0;
    let count = 0;

    A.forEach((val) => {
        totalSum += val;
    });

    if (totalSum % 3) {
        return false;
    }

    A.forEach((val) => {
        sum += val;
        if (sum === totalSum / 3) {
            count++;
            sum = 0;
        }
    });

    return count >= 3;
};
