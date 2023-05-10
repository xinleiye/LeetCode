/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    let res = 1;
    let rest = 1 % k;
    while (true) {
        if (rest === 0) {
            return res;
        }
        rest = (10 * rest + 1) % k;
        res++;
    }
};
