/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let pos = 0;
    let even = 0;
    let odd = 0;

    while (n) {
        if (n & 1 === 1) {
            pos % 2 === 1 ? odd++ : even++;
        }
        n = n >>> 1;
        pos++;
    }

    return [even, odd];
};
