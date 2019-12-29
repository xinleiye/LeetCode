/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = (new Array(n)).fill(0);
    let mid = n >>> 1;

    for (let i = 0; i < mid; i++) {
        res[i] = -n + i;
        res[n - 1 - i] = -res[i];
    }
    
    return res;
};
