/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const total = A.length;
    const res = new Array(total).fill(0);
    const numSet = new Set();

    res[0] = A[0] === B[0] ? 1 : 0;
    numSet.add(A[0]);
    numSet.add(B[0]);
    for (let i = 1; i < total; i++) {
        res[i] = res[i - 1];
        if (numSet.has(A[i])) {
            res[i]++;
        }
        numSet.add(A[i]);
        if (numSet.has(B[i])) {
            res[i]++;
        }
        numSet.add(B[i]);
    }

    return res;
};
