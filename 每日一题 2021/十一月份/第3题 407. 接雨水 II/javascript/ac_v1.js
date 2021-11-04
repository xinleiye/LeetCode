/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const maxRow = heightMap.length;
    const maxCol = heightMap[0].length;

    if (maxRow <= 2 || maxCol <= 2) {
        return 0;
    }

    let res = 0;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const minQueue = new MinPriorityQueue({
        priority: (bid) => bid.height,
    });
    const visited = new Array(maxRow);

    for (let i = 0; i < maxRow; i++) {
        visited[i] = new Array(maxCol).fill(false);
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (i === 0 || i === maxRow - 1 || j === 0 || j === maxCol - 1) {
                minQueue.enqueue({
                    height: heightMap[i][j],
                    row: i,
                    col: j,
                });
                visited[i][j] = true;
            }
        }
    }
    while (minQueue.size()) {
        const block = minQueue.dequeue().element;

        for (let i = 0; i < 4; i++) {
            const aRow = block.row + dir[i][0];
            const aCol = block.col + dir[i][1];

            if (aRow >= 0 && aRow < maxRow && aCol >= 0 && aCol < maxCol && !visited[aRow][aCol]) {
                if (heightMap[aRow][aCol] < block.height) {
                    res += block.height - heightMap[aRow][aCol];
                }
                visited[aRow][aCol] = true;
                minQueue.enqueue({
                    height: Math.max(heightMap[aRow][aCol], block.height),
                    row: aRow,
                    col: aCol,
                });
            }
        }
    }

    return res;
};
