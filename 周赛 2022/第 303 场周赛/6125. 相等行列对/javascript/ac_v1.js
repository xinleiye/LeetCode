/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const cols = [];
    
    for (let i = 0; i < maxRow; i++) {
        const col = [];

        for (let j = 0; j < maxRow; j++) {
            col.push(grid[j][i]);
        }
        cols.push(col);
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            let isSame = true;

            for (let k = 0; k < maxRow; k++) {
                if (grid[i][k] !== cols[j][k]) {
                    isSame = false;
                }
            }
            if (isSame) {
                res++;
            }
        }
    }
    
    return res;
};
