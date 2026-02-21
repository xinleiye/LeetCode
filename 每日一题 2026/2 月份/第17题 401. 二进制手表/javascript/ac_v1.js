/**
 * @param {number} n
 * @return {number}
 */

const mask1 = 0x55555555;
const mask2 = 0x33333333;
const mask4 = 0x0f0f0f0f;
const mask8 = 0x00ff00ff;
const mask16 = 0x0000ffff;
var reverseBits = function(n) {
    n = (n >>> 1) & mask1 | (n & mask1) << 1;
    n = (n >>> 2) & mask2 | (n & mask2) << 2;
    n = (n >>> 4) & mask4 | (n & mask4) << 4;
    n = (n >>> 8) & mask8 | (n & mask8) << 8;

    return n >>> 16 | (n & mask16) << 16
};
