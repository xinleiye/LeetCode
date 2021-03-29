/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let res = 0;
    let length = 32;

    while (length) {
        res = (res << 1) | (n & 1);
        n = n >>> 1;
        length--;
    }

    return res >>> 0;
};
