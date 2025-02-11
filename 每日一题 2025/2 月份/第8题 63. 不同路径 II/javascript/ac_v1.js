/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const maxRow = obstacleGrid.length;
    const maxCol = obstacleGrid[0].length;
    const path = new Array(maxCol).fill(0);

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    path[0] = 1;
    for (let i = 0; i < maxRow; i++) {
        if (obstacleGrid[i][0] === 1) {
            path[0] = 0;
        }
        for (let j = 1; j < maxCol; j++) {
            if (obstacleGrid[i][j] !== 1) {
                path[j] += path[j - 1];
            } else {
                path[j] = 0;
            }
        }
    }

    return path[maxCol - 1];
};
