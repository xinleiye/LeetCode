/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const rowInfo = new Array(maxRow);
    const colInfo = new Array(maxCol);
    const res = new Array(maxRow).fill(0).map(() => new Array(maxCol));

    for (let i = 0; i < maxRow; i++) {
        let one = 0;
        let zero = 0;

        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                one++;
            } else {
                zero++;
            }
        }
        rowInfo[i] = [zero, one];
    }
    for (let i = 0; i < maxCol; i++) {
        let one = 0;
        let zero = 0;

        for (let j = 0; j < maxRow; j++) {
            if (grid[j][i] === 1) {
                one++;
            } else {
                zero++;
            }
        }
        colInfo[i] = [zero, one];
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res[i][j] = rowInfo[i][1] + colInfo[j][1] - rowInfo[i][0] - colInfo[j][0];
        }
    }

    return res;
};
