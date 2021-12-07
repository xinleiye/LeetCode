/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const gridMap = new Array(maxRow);
    const srcColor = grid[row][col];
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const dfsIsBoundry = (row, col) => {
        if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) {
            return false;
        }
        if (gridMap[row][col]) {
            return grid[row][col] === srcColor;
        }
        if (grid[row][col] !== srcColor) {
            gridMap[row][col] = 1;

            return false;
        }

        let isInner = true;

        gridMap[row][col] = 1;
        for (let item of dir) {
            isInner &= dfsIsBoundry(row + item[0], col + item[1]);
        }
        if (!isInner) {
            gridMap[row][col] = -1;
        }

        return true;
    };

    for (let i = 0; i < maxRow; i++) {
        gridMap[i] = new Array(maxCol).fill(0);
    }
    dfsIsBoundry(row, col);
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            gridMap[i][j] = gridMap[i][j] === -1 ? color : grid[i][j];
        }
    }

    return gridMap;
};
