/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const res = new Array(maxCol).fill(0);

    for (let i = 0; i < maxCol; i++) {
        let len = 0;

        for (let j = 0; j < maxRow; j++) {
            len = Math.max(len, getWidth(grid[j][i]));
        }
        res[i] = len;
    }

    return res;
};

function getWidth (num) {
    let len = 0;

    if (num <= 0) {
        num = -num;
        len = 1;
    }
    while (num) {
        len++;
        num = Math.floor(num / 10);
    }

    return len;
}
