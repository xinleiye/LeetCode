/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let pre = 0;
    while (n) {
        if (n & 1 === 1) {
            pre++;
            n = n >>> 1;
            break;
        }
        n = n >>> 1;
    }

    let res = 0;
    let cur = pre + 1;
    while (n) {
        if (n & 1 === 1) {
            res = Math.max(res, cur - pre);
            pre = cur;
        }
        cur++;
        n = n >>> 1;
    }

    return res;
};
