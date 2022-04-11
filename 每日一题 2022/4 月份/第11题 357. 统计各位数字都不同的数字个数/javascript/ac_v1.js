/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let res = 0;
    const countArr = generateNumberCount(n);

    for (let i = 0; i <= n; i++) {
        res += countArr[i];
    }

    return res;
};

function generateNumberCount (length) {
    const arr = new Array(length + 1).fill(1);
    for (let i = 1; i <= length; i++) {
        let base = 9;
        for (let j = 0; j < i - 1; j++) {
            base = base * (9 - j);
        }
        arr[i] = base;
    }
    return arr;
}
