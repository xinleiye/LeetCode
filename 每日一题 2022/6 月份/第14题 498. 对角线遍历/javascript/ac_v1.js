/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    // 右上，左下
    const dir = [[-1, 1], [1, -1]];
    const calcStartPoint = (index, dir, maxRow, maxCol) => {
        if (dir === 0) {
            if (index >= maxRow) {
                return [maxRow - 1, index - maxRow + 1];
            } else {
                return [index, 0];
            }
        } else {
            if (index >= maxCol) {
                return [index - maxCol + 1, maxCol - 1];
            } else {
                return [0, index];
            }
        }
    };
    const search = (stack, mat, start, dir, maxRow, maxCol) => {
        let [row, col] = start;
        const [dr, dc] = dir;

        while (row >= 0 && row < maxRow && col >= 0 && col < maxCol) {
            stack.push(mat[row][col]);
            row += dr;
            col += dc;
        }
    };
    const res = [];

    for (let i = 0, len = maxRow + maxCol - 1; i < len; i++) {
        const start = calcStartPoint(i, i % 2, maxRow, maxCol);

        search(res, mat, start, dir[i % 2], maxRow, maxCol);
    }

    return res;
};
