/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const maxRow = grid.length;
    const max = maxRow * maxRow;
    const count = new Array(max + 1).fill(0);
    const res = new Array(2);

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            count[grid[i][j]]++;
        }
    }
    for (let i = 1; i <= max; i++) {
        if (count[i] === 2) {
            res[0] = i;
        } else if (count[i] === 0) {
            res[1] = i;
        }
    }

    return res;
};
