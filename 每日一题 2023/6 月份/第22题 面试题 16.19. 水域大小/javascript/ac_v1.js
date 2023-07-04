/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    const res = [];
    const maxRow = land.length;
    const maxCol = land[0].length;
    const visited = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(false));
    const dir = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (visited[i][j] || land[i][j] !== 0) {
                continue;
            }

            let area = 0;
            const stack = [[i, j]];
            visited[i][j] = true;
            while (stack.length) {
                const [row, col] = stack.shift();

                area++;
                for (const [aRow, aCol] of dir) {
                    const newRow = row + aRow;
                    const newCol = col + aCol;

                    if (newRow < 0 || newRow >= maxRow || newCol < 0 || newCol >= maxCol || visited[newRow][newCol] ||land[newRow][newCol] !== 0) {
                        continue;
                    }
                    stack.push([newRow, newCol]);
                    visited[newRow][newCol] = true;
                }
            }
            res.push(area);
        }
    }
    res.sort((n1, n2) => n1 - n2);

    return res;
};
