/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    let curN = n - 1;
    let curK = k;

    while (curN > 1) {
        const preLen = Math.pow(2, curN - 1);

        if (curK > preLen) {
            const newK = curK - preLen;

            if (newK <= preLen / 2) {
                curK = newK + preLen / 2;
            } else {
                curK = newK - preLen / 2;
            }
        }
        curN--;
    }

    return curK === 1 ? 0 : 1;
};
