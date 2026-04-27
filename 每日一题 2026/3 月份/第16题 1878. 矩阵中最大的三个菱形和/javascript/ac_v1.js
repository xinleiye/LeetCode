/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    // 主对角线前缀和
    const sum1 = Array.from({length: maxRow + 1}, _ => new Array(maxCol + 2).fill(0));
    // 次对角线前缀和
    const sum2 = Array.from({length: maxRow + 1}, _ => new Array(maxCol + 2).fill(0));
    const top3 = new Array(3).fill(0);
    const res = [];

    for (let i = 1; i <= maxRow; i++) {
        for (let j = 1; j <= maxCol; j++) {
            sum1[i][j] = sum1[i - 1][j - 1] + grid[i - 1][j - 1];
            sum2[i][j] = sum2[i - 1][j + 1] + grid[i - 1][j - 1];
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            setTop3(top3, grid[i][j]);
            for (let k = 1; k < maxRow; k++) {
                setTop3(top3, getSum(grid, sum1, sum2, i, j, k));
            }
        }
    }
    for (const n of top3) {
        if (n !== 0) {
            res.push(n);
        }
    }

    return res
};

function check(row, col, maxRow, maxCol) {
    return row < 0 || row >= maxRow || col < 0 || col >= maxCol;
}

function getSum(grid, sum1, sum2, row, col, len) {
    const tr = row;
    const tc = col;
    const lr = row + len;
    const lc = col - len;
    const rr = row + len;
    const rc = col + len;
    const br = row + len * 2;
    const bc = col;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let sum = 0;

    if (check(lr, lc, maxRow, maxCol) || check(rr,rc, maxRow, maxCol) || check(br, bc, maxRow, maxCol)) {
        return 0;
    }
    sum = sum2[lr + 1][lc + 1] - sum2[tr][tc + 2]
        + sum1[br + 1][bc + 1] - sum1[lr][lc]
        + sum2[br + 1][bc + 1] - sum2[rr][rc + 2]
        + sum1[rr + 1][rc + 1] - sum1[tr][tc] 
        - grid[tr][tc] - grid[lr][lc] - grid[rr][rc] - grid[br][bc];

    return sum;
}

function setTop3(arr, val) {
    if (val > arr[0]) {
        arr[2] = arr[1];
        arr[1] = arr[0];
        arr[0] = val;
    } else if (val !== arr[0] && val > arr[1]) {
        arr[2] = arr[1];
        arr[1] = val;
    } else if (val !== arr[0] && val !== arr[1] && val > arr[2]) {
        arr[2] = val;
    }
}
