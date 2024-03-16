/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const dir = [-1, 0, 1];
    let stack = new Set();

    for (let i = 0; i < maxRow; i++) {
        stack.add(i);
    }
    for (let i = 1; i < maxCol; i++) {
        const newStack = new Set();

        for (const j of stack) {
            for (const k of dir) {
                const row = j + k;

                if (row >= 0 && row < maxRow && grid[j][i - 1] < grid[row][i]) {
                    newStack.add(row);
                }
            }
        }
        if (newStack.size === 0) {
            return i - 1;
        }
        stack = newStack;
    }

    return maxCol - 1;
};
