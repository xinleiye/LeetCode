/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const num = n ^ (n >>> 1);
    return (num & (num + 1)) === 0;
};
