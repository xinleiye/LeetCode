/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let res = 0;
    let pre = 64;
    let cur = 0;

    while (n) {
        if (n & 1) {
            res = Math.max(res, cur - pre);
            pre = cur;
        }
        n = n >>> 1;
        cur++;
    }

    return res;
};
