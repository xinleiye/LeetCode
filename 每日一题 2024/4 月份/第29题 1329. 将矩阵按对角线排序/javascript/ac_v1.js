/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        handleVal(mat, i, 0);
    }
    for (let i = 1; i < maxCol; i++) {
        handleVal(mat, 0, i);
    }

    return mat;
};

function handleVal(grid, row, col) {
    const vals = [];
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let aRow = row;
    let aCol = col;
    while (aRow < maxRow && aCol < maxCol) {
        vals.push(grid[aRow][aCol]);
        aRow++;
        aCol++;
    }
    vals.sort((v1, v2) => v1 - v2);

    let index = 0;
    aRow = row;
    aCol = col;
    while (aRow < maxRow && aCol < maxCol) {
        grid[aRow][aCol] = vals[index];
        index++;
        aRow++;
        aCol++;
    }
}
