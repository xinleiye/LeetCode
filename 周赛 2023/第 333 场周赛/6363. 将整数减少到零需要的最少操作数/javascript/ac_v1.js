/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let res = 0;

    while (n) {
        if (n & 1) {
            let tmp = n;
            let count1 = 0;

            while (tmp & 1) {
                count1++;
                tmp = tmp >>> 1;
            }
            if (count1 === 1) {
                n -= 1;
            } else {
                n += 1;
            }
            res++;
        }
        n = n >>> 1;
    }

    return res;
};
