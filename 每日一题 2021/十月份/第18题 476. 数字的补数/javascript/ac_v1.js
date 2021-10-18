/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = 0;
    let mask = 1;

    while (num > 0) {
        if ((num & 1) === 0) {
            res |= mask;
        }
        mask = mask << 1;
        num = num >>> 1;
    }

    return res;
};
