/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    if (grid[0][0] !== 0) {
        return false;
    }

    const maxLine = grid.length;
    const total = grid.length * grid.length;
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
    const validPos = (cur, max) => {
        return cur >= 0 && cur < max;
    };
    let curX = 0;
    let curY = 0;
    let index = 1;
    while (index < total) {
        let flag = false;
        for (const [x, y] of dir) {
            const nextX = curX + x;
            const nextY = curY + y;
            if (validPos(nextX, maxLine) && validPos(nextY, maxLine)) {
                if (grid[nextX][nextY] === index) {
                    flag = true;
                    curX = nextX;
                    curY = nextY
                    break;
                }
            }
        }
        if (!flag) {
            return false;
        }
        index++;
    }

    return true;
};
