/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let res = 0;

    for (let i = 0, len = Math.floor(n / 2); i < len; i++) {
        res += n - (2 * i + 1);
    }
    
    return res;
};
