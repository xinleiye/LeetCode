/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const numArr = num.toString().split("").map(item => Number(item));
    const total = numArr.length;
    let maxSrc = 0;
    let max = 0;
    let minSrc = -1
    let minTar = 0;
    let min = 0;

    for (let i = 0; i < total; i++) {
        if (numArr[i] !== 9) {
            maxSrc = numArr[i];
            break;
        }
    }
    if (numArr[0] !== 1) {
        minSrc = numArr[0];
        minTar = 1;
    } else {
        for (let i = 1; i < total; i++) {
            if (numArr[i] > 1) {
                minSrc = numArr[i];
                minTar = 0;
                break;
            }
        }
    }
    for (const n of numArr) {
        max = max * 10 + (n === maxSrc ? 9 : n);
        min = min * 10 + (n === minSrc ? minTar : n);
    }

    return max - min;
};
