/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    if (n === k) {
        return 0;
    }

    let res = 0;
    while (n || k) {
        const bn = n & 1;
        const bk = k & 1;
        
        if (bn !== bk) {
            if ((bn === 1 && bk === 0)) {
                res++;
            } else {
                return -1;
            }
        }
        n = n >>> 1;
        k = k >>> 1;
    }

    return res;
};
