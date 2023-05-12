/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const xPow = generateNum(x, bound);
    const yPow = generateNum(y, bound);
    const res = [];
    const numSet = new Set();

    for (const n1 of xPow) {
        for (const n2 of yPow) {
            const sum = n1 + n2;

            if (sum <= bound && !numSet.has(sum)) {
                res.push(sum);
                numSet.add(sum);
            }
        }
    }

    return res;
};

function generateNum(base, max) {
    if (base === 1) {
        return [1];
    }

    let num = 1;
    let index = 0;
    const arr = [];
    while (num <= max) {
        arr.push(num);
        index++;
        num = Math.pow(base, index);
    }

    return arr;
}
