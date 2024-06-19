/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function(mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    const posMap = new Map();
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (!posMap.has(mat[i][j])) {
                posMap.set(mat[i][j], []);
            }
            posMap.get(mat[i][j]).push([i, j]);
        }
    }

    const sortedMap = new Map([...posMap.entries()].sort((n1, n2) => n1[0] - n2[0]));
    const rowMax = new Array(maxRow).fill(0);
    const colMax = new Array(maxCol).fill(0);
    for (const [_, pos] of sortedMap) {
        const total = pos.length;
        const res = pos.map(([row, col]) => Math.max(rowMax[row], colMax[col]) + 1);
        for (let i = 0; i < total; i++) {
            const [row, col] = pos[i];
            const cur = res[i];
            rowMax[row] = Math.max(rowMax[row], cur);
            colMax[col] = Math.max(colMax[col], cur);
        }
    }

    return Math.max(...rowMax);
};
