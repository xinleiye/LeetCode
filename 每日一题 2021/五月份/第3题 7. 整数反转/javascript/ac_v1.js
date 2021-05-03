/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);

    while (x !== 0) {
        const rest = x % 10;

        x = (x - rest) / 10;
        res = res * 10 + rest;
        if (res < INT_MIN || res > INT_MAX) {
            return 0;
        }
    }

    return res;
};
