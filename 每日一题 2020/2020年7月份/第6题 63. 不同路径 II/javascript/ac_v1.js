/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const row = obstacleGrid.length;
    const col = obstacleGrid[0].length;
    let path = new Array(col);

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    path[0] = 1;
    for (let i = 1; i < col; i++) {
        if (obstacleGrid[0][i] === 1) {
            path[i] = 0;
        } else {
            path[i] = path[i - 1];
        }
    }

    for (let i = 1; i < row; i++) {
        if (obstacleGrid[i][0] === 1) {
            path[0] = 0;
        }
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] === 1) {
                path[j] = 0;
            } else {
                path[j] += path[j - 1];
            }
        }

    }

    return path[col - 1];
};
