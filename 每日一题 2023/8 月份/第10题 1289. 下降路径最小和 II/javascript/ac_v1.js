/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let pathSum = new Array(maxCol);
    let res = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < maxCol; i++) {
        pathSum[i] = grid[0][i];
    }
    for (let i = 1; i < maxRow; i++) {
        const tmpSum = new Array(maxCol);

        for (let j = 0; j < maxCol; j++) {
            let sum = Number.MAX_SAFE_INTEGER;

            for (let k = 0; k < maxCol; k++) {
                if (k === j) {
                    continue;
                }
                sum = Math.min(sum, grid[i][j] + pathSum[k]);
            }
            tmpSum[j] = sum;
        }
        pathSum = tmpSum;
    }
    for (const s of pathSum) {
        res = Math.min(s, res);
    }

    return res;
};
