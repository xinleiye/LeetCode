/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    const rowMax = new Array(n + 1).fill(0);
    const rowMin = new Array(n + 1).fill(n + 1);
    const colMax = new Array(n + 1).fill(0);
    const colMin = new Array(n + 1).fill(n + 1);
    let res = 0;

    for (const [x, y] of buildings) {
        rowMax[y] = Math.max(rowMax[y], x);
        rowMin[y] = Math.min(rowMin[y], x);
        colMax[x] = Math.max(colMax[x], y);
        colMin[x] = Math.min(colMin[x], y);
    }
    for (const [x, y] of buildings) {
        if (rowMin[y] < x && x < rowMax[y] && colMin[x] < y && y < colMax[x]) {
            res++;
        }
    }

    return res;
};
