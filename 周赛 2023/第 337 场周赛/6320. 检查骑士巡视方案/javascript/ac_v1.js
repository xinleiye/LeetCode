/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    const dir = [
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [-1, -2],
        [1, -2],
        [-2, -1],
        [-2, 1]
    ];
    const maxRow = grid.length;
    let curRow = 0;
    let curCol = 0;
    const total = maxRow * maxRow;
    const validPos = (cur, max) => {
        return cur >= 0 && cur < max;
    };

    if (grid[0][0] !== 0) {
        return false;
    }
    for (let i = 1; i < total; i++) {
        let valid = false;

        for (const [row, col] of dir) {
            const nextRow = curRow + row;
            const nextCol = curCol + col;
            
            if (validPos(nextRow, maxRow) && validPos(nextCol, maxRow)) {
                if (grid[nextRow][nextCol] === i) {
                    valid = true;
                    curRow = nextRow;
                    curCol = nextCol;
                    break;
                }
            }
        }
        if (!valid) {
            return false;
        }
    }

    return true;
};
