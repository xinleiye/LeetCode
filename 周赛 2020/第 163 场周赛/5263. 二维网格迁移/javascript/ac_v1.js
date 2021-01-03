/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let lastRow;
    let lastEle;
    let row = grid.length;
    let col = grid[0].length;
    let tGrid = new Array(col);
    
    // 行列互换
    for (let i = 0; i < col; i++) {
        tGrid[i] = new Array(row);
    }
    for (let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            tGrid[j][i] = grid[i][j];
        }
    }

    row = tGrid.length;
    col = tGrid[0].length;
    for (let i = 0; i < k; i++) {
        // first step
        lastRow = tGrid[row - 1];
        for (let j = row - 1; j > 0; j--) {
            tGrid[j] = tGrid[j - 1];
        }

        // second step
        lastEle = lastRow[col - 1];
        for (let j = col - 1; j > 0; j--) {
            lastRow[j] = lastRow[j - 1];
        }
        // third setp
        lastRow[0] = lastEle;
        
        tGrid[0] = lastRow;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            grid[j][i] = tGrid[i][j];
        }
    }
    return grid;
};
