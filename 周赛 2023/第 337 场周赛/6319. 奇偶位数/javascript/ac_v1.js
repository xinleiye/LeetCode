/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let pos = 0;
    let res = [0, 0];

    while (n) {
        if (n & 1) {
            res[pos % 2]++;
        }
        pos++;
        n = n >>> 1;
    }

    return res;
};
