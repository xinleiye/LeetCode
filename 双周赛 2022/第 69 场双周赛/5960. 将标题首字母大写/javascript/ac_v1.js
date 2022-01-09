/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        const buff = new Array(n + 1).fill(0);

        // i 行
        for (const num of matrix[i]) {
            buff[num]++;
        }
        // i 列
        for (let j = 0; j < n; j++) {
            buff[matrix[j][i]]++;
        }
        for (let j = 1; j <= n; j++) {
            if (buff[j] !== 2) {
                return false;
            }
        }
    }

    return true;
};
