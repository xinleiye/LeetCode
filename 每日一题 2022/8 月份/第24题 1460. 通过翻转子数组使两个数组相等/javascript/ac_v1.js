/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const maxValue = 1000;
    const numArr = new Array(maxValue + 1).fill(0);

    for (const n of target) {
        numArr[n]++;
    }
    for (const n of arr) {
        numArr[n]--;
    }
    for (let i = 1; i <= maxValue; i++) {
        if (numArr[i] !== 0) {
            return false;
        }
    }

    return true;
};
