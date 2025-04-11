/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let res = 0;
    for (let i = low; i <= high; i++) {
        if (check(i)) {
            res++;
        }
    }

    return res;
};

function check(num) {
    const numStr = num.toString();
    const length = numStr.length;
    if (length % 2) {
        return false;
    }

    let sum1 = 0;
    let sum2 = 0;
    for (let i = length / 2 - 1; i >= 0; i--) {
        sum1 += Number(numStr[i]);
        sum2 += Number(numStr[length - 1 - i]);
    }

    return sum1 === sum2;
}
