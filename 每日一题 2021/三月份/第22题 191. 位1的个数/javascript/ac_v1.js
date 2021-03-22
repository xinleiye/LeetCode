/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let res = 0;

    while (n) {
        if (n & 1) {
            res++;
        }
        n = n >>> 1;
    }

    return res;
};
