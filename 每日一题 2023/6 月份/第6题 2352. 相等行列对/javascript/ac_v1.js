/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let res = 0;
    const max = grid.length;
    const rowMap = new Map();
    for (const row of grid) {
        const key = row.join(",");

        if (rowMap.has(key)) {
            rowMap.set(key, rowMap.get(key) + 1);
        } else {
            rowMap.set(key, 1);
        }
    }
    for (let i = 0; i < max; i++) {
        const col = new Array(max);
        for (let j = 0; j < max; j++) {
            col[j] = grid[j][i];
        }

        const key = col.join(",");
        if (rowMap.has(key)) {
            res += rowMap.get(key);
        }
    }

    return res;
};
