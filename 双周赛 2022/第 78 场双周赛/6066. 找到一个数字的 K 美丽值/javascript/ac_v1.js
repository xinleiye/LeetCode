/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let res = 0;
    let aNum = num;
    const numArr = [];

    while (aNum) {
        numArr.unshift(aNum % 10);
        aNum = (aNum - numArr[0]) / 10;
    }
    for (let i = k - 1; i < numArr.length; i++) {
        let curNum = 0;

        for (let j = 0; j < k; j++) {
            curNum = curNum * 10 + numArr[j + i - (k - 1)];
        }
        if (curNum !== 0 && num % curNum === 0) {
            res++;
        }
    }

    return res;
};
