/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const cache = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(Number.MAX_SAFE_INTEGER));
    
    for (let i = 0; i < maxCol; i++) {
        cache[0][i] = grid[0][i];
    }
    for (let i = 1; i < maxRow; i++) {
        const preRow = grid[i - 1];
        const preCost = cache[i - 1];
        
        for (let j = 0; j < maxCol; j++) {
            for (let k = 0; k < maxCol; k++) {
                cache[i][j] = Math.min(cache[i][j], grid[i][j] + preCost[k] + moveCost[preRow[k]][j]);
            }
        }
    }
    
    let res = Number.MAX_SAFE_INTEGER;
    for (const cost of cache[maxRow - 1]) {
        res = Math.min(res, cost);
    }
    return res;
};
