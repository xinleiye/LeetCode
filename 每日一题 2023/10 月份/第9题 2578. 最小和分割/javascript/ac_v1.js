/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let num1 = 0;
    let num2 = 0
    const numArr = [];

    while (num) {
        numArr.push(num % 10);
        num = Math.floor(num / 10);
    }
    numArr.sort((n1, n2) => n1 - n2);
    for (let i = 0, len = numArr.length; i < len; i += 2) {
        num1 = num1 * 10 + numArr[i];
        if (i + 1 < len) {
            num2 = num2 * 10 + numArr[i + 1];
        }
    }

    return num1 + num2;
};
