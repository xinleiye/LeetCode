/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const dp = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(-1));
    const dir = [-1, 0, 1];

    for (let i = 0; i < maxRow; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i < maxCol; i++) {
        const nextCol = i + 1;
        let moved = false;

        for (let j = 0; j < maxRow; j++) {
            for (const dr of dir) {
                const nextRow = j + dr;
                
                if (nextRow < 0 || nextRow >= maxRow || nextCol < 0 || nextCol >= maxCol) {
                    continue;
                }
                if (dp[j][i] >= 0 && grid[nextRow][nextCol] > grid[j][i]) {
                    moved = true;
                    dp[nextRow][nextCol] = Math.max(dp[nextRow][nextCol], dp[j][i] + 1);
                }
                res = Math.max(res, dp[nextRow][nextCol]);
            }
        }
        if (!moved) {
            break;
        }
    }

    return res;
};
