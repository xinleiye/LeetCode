/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const numSet = new Set();
    let pow = 1;
    const MAX = 1e9;

    while (pow <= MAX) {
        numSet.add(getNumString(pow));
        pow *= 2;
    }

    return numSet.has(getNumString(n));
};

function getNumString(num) {
    const arr = [];

    while (num) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }

    return arr.sort((n1, n2) => n1 - n2).join("");
}
