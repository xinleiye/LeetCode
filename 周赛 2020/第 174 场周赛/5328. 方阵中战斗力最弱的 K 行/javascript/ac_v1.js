/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let res = [];
    let sums = [];

    for (let i = 0, len = mat.length; i < len; i++) {
        let sum = 0;

        for (let item of mat[i]) {
            sum += item;
        }
        sums[i] = sum;
    }

    for (let i = 0; i < k; i++) {
        let min = Infinity;
        let minIndex = -1;

        for (let j = 0, len = sums.length; j < len; j++) {
            if (sums[j] < min) {
                minIndex = j;   
                min = sums[j];
            }
        }
        sums[minIndex] = Infinity;
        res.push(minIndex);
    }

    return res;
};
