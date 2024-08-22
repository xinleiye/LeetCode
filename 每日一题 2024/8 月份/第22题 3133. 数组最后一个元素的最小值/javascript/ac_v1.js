/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let res = BigInt(x);
    let bx = BigInt(x);
    let diff = BigInt(n - 1);
    let pos = 0n;

    while (diff) {
        if ((bx & 1n) === 0n) {
            res = res | ((diff & 1n) << pos);
            diff = diff >> 1n;
        }
        bx = bx >> 1n;
        pos++;
    }

    return Number(res);
};
