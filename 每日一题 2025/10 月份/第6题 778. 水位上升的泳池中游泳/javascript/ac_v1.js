/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let left = 0;
    let right = grid.length * grid.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (grid[0][0] <= mid && dfsSearch(grid, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function dfsSearch(grid, target) {
    const total = grid.length;
    const visited = new Array(total).fill(0).map(_ => new Array(total).fill(false));
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const stack = [[0, 0]];

    visited[0][0] = true;
    while (stack.length) {
        const [row, col] = stack.shift();

        for (const [r, c] of directions) {
            const newRow = row + r;
            const newCol = col + c;

            if (newRow < 0 || newRow >= total ||
                newCol < 0 || newCol >= total ||
                visited[newRow][newCol] ||
                grid[newRow][newCol] > target) {
                continue;
            }
            if (newRow === total - 1 && newCol === total - 1) {
                return true;
            }
            stack.push([newRow, newCol]);
            visited[newRow][newCol] = true;
        }
    }

    return false;
}
