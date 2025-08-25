/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const res = [];
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    let index = 0;

    while (index < maxRow + maxCol - 1) {
        const num = [];
        let row = Math.min(index, maxRow - 1);
        let col = Math.max(0, index - row);

        while (row >= 0 && row < maxRow && col >= 0 && col < maxCol) {
            num.push(mat[row][col]);
            row--;
            col++;
        }
        if (index % 2 === 1) {
            res.push(...num.reverse());
        } else {
            res.push(...num);
        }
        index++;
    }

    return res;
};
