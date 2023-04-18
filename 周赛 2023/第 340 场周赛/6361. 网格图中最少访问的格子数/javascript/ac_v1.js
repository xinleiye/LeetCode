/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const colStacks = new Array(maxCol).fill(0).map(() => new Array());
    let res = Number.MAX_SAFE_INTEGER;

    for (let i = maxRow - 1; i >= 0; i--) {
        const rowSt = [];

        for (let j = maxCol - 1; j >= 0; j--) {
            const colSt = colStacks[j];

            res = Number.MAX_SAFE_INTEGER;
            if (i === maxRow - 1 && j === maxCol - 1) {
                res = 0;
            } else if (grid[i][j]) {
                let index = binarySearch(rowSt, j + grid[i][j]);

                if (index < rowSt.length) {
                    res = Math.min(res, rowSt[index][0]);
                }
                index = binarySearch(colSt, i + grid[i][j]);
                if (index < colSt.length) {
                    res = Math.min(res, colSt[index][0]);
                }
            }
            if (res !== Number.MAX_SAFE_INTEGER) {
                res++;
                while (rowSt.length && res <= rowSt[rowSt.length - 1][0]) {
                    rowSt.pop();
                }
                rowSt.push([res, j]);
                while (colSt.length && res <= colSt[colSt.length - 1][0]) {
                    colSt.pop();
                }
                colSt.push([res, i]);
            }
        }
    }

    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

function binarySearch(arr, tar) {
    let left = -1;
    let right = arr.length;

    while (left + 1 < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid][1] > tar) {
            left = mid
        } else {
            right = mid;
        }
    }

    return right;
}
