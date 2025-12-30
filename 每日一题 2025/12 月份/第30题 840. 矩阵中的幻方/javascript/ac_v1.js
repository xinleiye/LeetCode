/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const check = (grid, row, col) => {
        let mask = 0;
        // 1111111110(2) = 2^10 − 2 = 1022
        const validMask = 1022;
        const rowSum = [0, 0, 0];
        const colSum = [0, 0, 0];

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                mask |= (1 << grid[row + i][col + j]);
                rowSum[i + 1] += grid[row + i][col + j];
                colSum[j + 1] += grid[row + i][col + j];
            }
        }

        return mask === validMask && rowSum[0] === 15 && rowSum[1] === 15 && colSum[0] === 15 && colSum[1] === 15;
    };

    for (let i = 1; i < maxRow - 1; i++) {
        for (let j = 1; j < maxCol - 1; j++) {
            if (grid[i][j] === 5 && check(grid, i, j)) {
                res++;
            }
        }
    }

    return res;
};
