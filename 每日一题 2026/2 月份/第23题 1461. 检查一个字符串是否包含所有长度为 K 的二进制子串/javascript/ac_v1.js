/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const total = s.length;
    const numArr = new Array(1 << k).fill(false);
    let count = 0;
    let num = 0;
    const MASK = (1 << k) - 1;

    for (let i = 0; i < total; i++) {
        num = (num << 1 & MASK) | Number(s[i]);
        if (i >= k - 1 && !numArr[num]) {
            numArr[num] = true;
            count++;
        }
    }

    return count === (1 << k);
};
