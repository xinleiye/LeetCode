/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    let res = 0;
    const maxRow = heights.length;
    const maxCol = heights[0].length;
    let left = 0;
    let right = 1e6 - 1;
    // 上 下 左 右
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (left <= right) {
        let mid = (left + right) >>> 1;
        const stack = [];
        const visited = new Array(maxRow * maxCol).fill(false);

        stack.push([0, 0]);
        visited[0] = true;
        while (stack.length) {
            let [row, col] = stack.shift();

            for (let i = 0; i < 4; i++) {
                const aRow = row + directions[i][0];
                const aCol = col + directions[i][1];

                if (aRow >= 0 && aRow < maxRow && aCol >= 0 && aCol < maxCol && !visited[aRow * maxCol + aCol] && Math.abs(heights[row][col] - heights[aRow][aCol]) <= mid) {
                    visited[aRow * maxCol + aCol] = true;
                    stack.push([aRow, aCol]);
                }
            }
        }

        if (visited[visited.length - 1]) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
