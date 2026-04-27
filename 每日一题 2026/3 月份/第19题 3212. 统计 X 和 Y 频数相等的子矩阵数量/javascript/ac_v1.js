/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const sum = Array.from({length: maxRow + 1}, _ => Array.from({length: maxCol + 1}, _ => new Array(2).fill(0)));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === "X") {
                sum[i + 1][j + 1][0] = sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0] + 1;
                sum[i + 1][j + 1][1] = sum[i + 1][j][1] + sum[i][j + 1][1] - sum[i][j][1];
            } else if (grid[i][j] === "Y") {
                sum[i + 1][j + 1][0] = sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0];
                sum[i + 1][j + 1][1] = sum[i + 1][j][1] + sum[i][j + 1][1] - sum[i][j][1] + 1;
            } else {
                sum[i + 1][j + 1][0] = sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0];
                sum[i + 1][j + 1][1] = sum[i + 1][j][1] + sum[i][j + 1][1] - sum[i][j][1];
            }
            if (sum[i + 1][j + 1][0] > 0 && sum[i + 1][j + 1][0] === sum[i + 1][j + 1][1]) {
                res++;
            }
        }
    }

    return res;
};
