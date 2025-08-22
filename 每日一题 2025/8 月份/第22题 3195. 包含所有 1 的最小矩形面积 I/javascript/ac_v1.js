/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let topY = maxRow;
    let topX = maxCol;
    let bottomY = 0;
    let bottomX = 0;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                topY = Math.min(topY, i);
                topX = Math.min(topX, j);
                bottomY = Math.max(bottomY, i);
                bottomX = Math.max(bottomX, j);
            }
        }
    }

    return (bottomX - topX + 1) * (bottomY - topY + 1);
};
