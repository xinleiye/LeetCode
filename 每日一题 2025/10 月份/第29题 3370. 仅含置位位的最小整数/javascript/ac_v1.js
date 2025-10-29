/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let res = n;
    let base = 1;

    while (base < n) {
        if (!(n & base)) {
            res = res | base;
        }
        base = base << 1;
    }

    return res;    
};
