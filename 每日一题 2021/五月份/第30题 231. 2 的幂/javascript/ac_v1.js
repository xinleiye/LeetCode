/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let oneCount = 0;

    if (n < 0) {
        return false;
    }

    while (n) {
        if (n & 1) {
            oneCount++;
        }
        n = n >>> 1;
    }

    return oneCount === 1;
};
