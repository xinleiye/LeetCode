/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const res = [];
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    const isMaxInCol = (val, col) => {
        let max = val;

        for (let i = 0; i < rowLen; i++) {
            max = Math.max(max, matrix[i][col]);
        }

        return max === val;
    };

    for (let i = 0; i < rowLen; i++) {
        let val = Infinity;
        let col = 0;

        for (let j = 0; j < colLen; j++) {
            if (matrix[i][j] < val) {
                val = matrix[i][j];
                col = j;
            }
        }

        if (isMaxInCol(val, col)) {
            res.push(val);
        }
    }

    return res;
};
