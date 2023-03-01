/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const maxN = grid.length - 2;
    const res = new Array(maxN).fill(0).map(() => new Array(maxN));

    for (let row = 0; row < maxN; row++) {
        for (let col = 0; col < maxN; col++) {
            let val = 0;

            for (let i = row + 2; i >= row; i--) {
                for (let j = col + 2; j >= col; j--) {
                    val = Math.max(grid[i][j], val);
                }
            }
            res[row][col] = val;
        }
    }

    return res;
};
