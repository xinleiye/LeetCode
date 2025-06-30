/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const numArr = num.toString().split("").map(item => Number(item));
    let max = 0;
    let min = 0;
    let index = 0;
    const total = numArr.length;

    while (index < total && numArr[index] === 9) {
        index++;
    }
    for (let i = 0; i < total; i++) {
        max = max * 10 + (numArr[i] === numArr[index] ? 9 : numArr[i]);
        min = min * 10 + (numArr[i] === numArr[0] ? 0 : numArr[i]);
    }

    return max - min;
};
