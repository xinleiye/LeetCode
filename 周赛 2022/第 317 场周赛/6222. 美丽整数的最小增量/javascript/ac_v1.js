/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
    let numArr = [];
    let num = n;
    let sum = 0;
    while (num) {
        const rest = num % 10;
        sum += rest;
        numArr.unshift(rest);
        num = (num - rest) / 10;
    }
    if (sum <= target) {
        return 0;
    }

    numArr.unshift(0);
    for (let i = numArr.length; i > 0; i--) {
        if (numArr[i]) {
            let pos = i;
            let carry = 1;
            numArr[pos] = 0;
            while (carry && pos > 0) {
                let tempSum = numArr[pos - 1] + carry;
                carry = tempSum > 9 ? 1 : 0;
                numArr[pos - 1] = tempSum % 10;
                pos--;
            }

            sum = 0;
            for (const n of numArr) {
                sum += n;
            }
            if (sum <= target) {
                break;
            }
        }
    }

    let resNum = 0;
    for (const n of numArr) {
        resNum = resNum * 10 + n;
    }

    return resNum - n;
};
