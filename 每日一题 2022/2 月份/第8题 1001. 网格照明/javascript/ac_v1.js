/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    const res = new Array(queries.length).fill(0);
    const rowMap = new Map();
    const colMap = new Map();
    const diagonalMap = new Map();
    const antiDiagonalMap = new Map();
    const lampSet = new Set();
    const lampHash = (row, col) => `${row}-${col}`;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [0, 0]];

    for (const [row, col] of lamps) {
        if (lampSet.has(lampHash(row, col))) {
            continue;
        }
        lampSet.add(lampHash(row, col));
        rowMap.set(row, (rowMap.get(row) || 0) + 1);
        colMap.set(col, (colMap.get(col) || 0) + 1);
        diagonalMap.set(row - col, (diagonalMap.get(row - col) || 0) + 1);
        antiDiagonalMap.set(row + col, (antiDiagonalMap.get(row + col) || 0) + 1);
    }
    queries.forEach((q, index) => {
        const [row, col] = q;

        if (rowMap.get(row) || colMap.get(col) || diagonalMap.get(row - col) || antiDiagonalMap.get(row + col)) {
            res[index] = 1;
        }
        for (const dir of directions) {
            const aRow = row + dir[0];
            const aCol = col + dir[1];

            if (aRow < 0 || aRow >= n || aCol < 0 || aCol >= n || !lampSet.has(lampHash(aRow, aCol))) {
                continue;
            }
            lampSet.delete(lampHash(aRow, aCol));
            rowMap.set(aRow, rowMap.get(aRow) - 1);
            colMap.set(aCol, colMap.get(aCol) - 1);
            diagonalMap.set(aRow - aCol, diagonalMap.get(aRow - aCol) - 1);
            antiDiagonalMap.set(aRow + aCol, antiDiagonalMap.get(aRow + aCol) -1);
        }
    });

    return res;
};
