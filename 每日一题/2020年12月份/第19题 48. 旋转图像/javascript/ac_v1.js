/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const cols = matrix.length;
    let moveCircle = (row) => {
        const count = cols - 2 * row;
        let  buff = new Array(count);

        for (let i = 0; i < count; i++) {
            buff[i] = matrix[row][i + row];
        }
        for (let i = 0; i < count; i++) {
            matrix[row][row + count - 1 - i] = matrix[row + i][row];
        }
        for (let i = 0; i < count; i++) {
            matrix[row + i][row] = matrix[row + count - 1][row + i];
        }
        for (let i = 0; i < count; i++) {
            matrix[row + count - 1][row + i] = matrix[row + count - 1 - i][row + count - 1];
        }
        for (let i = 0; i < count; i++) {
            matrix[row + count - 1 - i][row + count - 1] = buff[count - 1 - i];
        }
    };

    for (let i = 0, len = cols >>> 1; i < len; i++) {
        moveCircle(i);
    }
};
