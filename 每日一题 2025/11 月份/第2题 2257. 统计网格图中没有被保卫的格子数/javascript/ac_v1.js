/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    let res = m * n;
    const grid = new Array(m).fill(0).map(_ => new Array(n).fill(0));
    for (const [r, c] of guards) {
        grid[r][c] = 1;
        res--;
    }
    for (const [r, c] of walls) {
        grid[r][c] = 2;
        res--;
    }

    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (const [r, c] of guards) {
        for (const [dr, dc] of dir) {
            let aRow = r + dr;
            let aCol = c + dc;
            while (aRow >= 0 && aRow < m && aCol >= 0 && aCol < n && grid[aRow][aCol] !== 1 && grid[aRow][aCol] !== 2) {
                if (grid[aRow][aCol] !== 3) {
                    res--;
                    grid[aRow][aCol] = 3;
                }
                aRow += dr;
                aCol += dc;
            }
        }
    }

    return res;
};
