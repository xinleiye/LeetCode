/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const res = Array.from({length: maxRow - k + 1}, _ => new Array(maxCol - k + 1).fill(0));
    const countK = k * k;

    for (let i = maxRow - k; i >= 0; i--) {
        for (let j = maxCol - k; j >= 0; j--) {
            const vals = [];
            let min = Number.MAX_SAFE_INTEGER;

            for (let m = 0; m < k; m++) {
                for (let n = 0; n < k; n++) {
                    vals.push(grid[i + m][j + n]);
                }
            }
            vals.sort((n1, n2) => n1 - n2);
            for (let m = 1; m < countK; m++) {
                if (vals[m] !== vals[m - 1]) {
                    min = Math.min(min, vals[m] - vals[m - 1]);
                }
            }
            if (min !== Number.MAX_SAFE_INTEGER) {
                res[i][j] = min;
            }
        }
    }

    return res;
};
