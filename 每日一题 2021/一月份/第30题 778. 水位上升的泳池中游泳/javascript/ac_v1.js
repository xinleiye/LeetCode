/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let left = 0;
    let right = grid.length * grid.length - 1;
    const bfs = (grid, maxHeight) => {
        const length = grid.length;
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const visited = new Array(length);
        const stack = [];

        for (let i = 0; i < length; i++) {
            visited[i] = new Array(length).fill(false);
        }

        stack.push([0, 0]);
        visited[0][0] = true;
        while (stack.length) {
            let [row, col] = stack.shift();

            for (let i = 0; i < 4; i++) {
                const aRow = row + directions[i][0];
                const aCol = col + directions[i][1];

                if (aRow >= 0 && aRow < length && aCol >= 0 && aCol < length && !visited[aRow][aCol] && grid[aRow][aCol] <= maxHeight) {
                    if (aRow === length - 1 && aCol === length - 1) {
                        return true;
                    }
                    stack.push([aRow, aCol]);
                    visited[aRow][aCol] = true;
                }
            }
        }

        return false;
    };

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (grid[0][0] <= mid && bfs(grid, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
