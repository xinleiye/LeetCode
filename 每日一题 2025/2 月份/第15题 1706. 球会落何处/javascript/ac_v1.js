/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const res = new Array(maxCol);
    const isPass = (col) => {
        let curCol = col;

        for (let i = 0; i < maxRow; i++) {
            if (grid[i][curCol] === 1) {
                // 导向右侧，未到有边界，右边格子也导向右侧
                if (curCol < maxCol - 1 && grid[i][curCol + 1] === 1) {
                    curCol++;
                } else {
                    return -1;
                }
            } else {
                if (curCol > 0 && grid[i][curCol - 1] === -1) {
                    curCol--;
                } else {
                    return -1;
                }
            }
        }
        
        return curCol;
    };

    for (let i = 0; i < maxCol; i++) {
        res[i] = isPass(i);
    }

    return res;
};
