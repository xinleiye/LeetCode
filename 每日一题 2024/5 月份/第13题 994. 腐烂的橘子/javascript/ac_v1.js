/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let res = 0;
    let stack = [];
    let good = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(maxRow).fill(0).map(_ => new Array(maxCol).fill(false));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                good++;
            } else if (grid[i][j] === 2) {
                stack.push([i, j]);
            }
        }
    }
    while (stack.length) {
        const newStack = [];

        while (stack.length) {
            const [row, col] = stack.shift();

            for (const [r, c] of dir) {
                const aRow = row + r;
                const aCol = col + c;

                if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol || visited[aRow][aCol] || grid[aRow][aCol] !== 1) {
                    continue;
                }
                newStack.push([aRow, aCol]);
                visited[aRow][aCol] = true;
                good--;
            }
        }
        if (newStack.length) {
            res++;
            stack = newStack;
        }
    }

    return good === 0 ? res : -1;
};
