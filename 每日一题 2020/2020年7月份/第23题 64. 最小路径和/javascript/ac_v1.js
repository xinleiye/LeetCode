/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let pathSum = new Array(grid[0].length);

    pathSum[0] = grid[0][0];
    for (let i = 1; i < grid[0].length; i++) {
        pathSum[i] = pathSum[i - 1] + grid[0][i]; 
    }

    for (let i = 1; i < grid.length; i++) {
        pathSum[0] += grid[i][0];
        for (let j = 1; j < grid[0].length; j++) {
            pathSum[j] = Math.min(pathSum[j], pathSum[j - 1]) + grid[i][j];
        }
    }
    return pathSum[pathSum.length - 1];
};
