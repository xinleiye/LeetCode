/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    return n === 0 ? 1 : n ^ ((1 << getHightBit(n)) - 1);
};

function getHightBit(num) {
    let res = 0;

    while (num) {
        res++;
        num = num >>> 1;
    }

    return res;
}
