/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let res = new Array(maxRow).fill(0).map(_ => new Array(maxCol));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            const leftSet = new Set();
            const rightSet = new Set();
            let row = i - 1;
            let col = j - 1;

            while (row >= 0 && col >= 0) {
                leftSet.add(grid[row][col]);
                row--;
                col--;
            }
            row = i + 1;
            col = j + 1;
            while (row < maxRow && col < maxCol) {
                rightSet.add(grid[row][col]);
                row++;
                col++;
            }
            res[i][j] = Math.abs(leftSet.size - rightSet.size);
        }
    }

    return res;
};
