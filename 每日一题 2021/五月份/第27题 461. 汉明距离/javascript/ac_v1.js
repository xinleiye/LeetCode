/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res = 0;
    let xor = x ^ y;

    while (xor > 0) {
        if (xor & 1) {
            res++;
        }
        xor = xor >>> 1;
    }

    return res;
};
