/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function(grid, pricing, start, k) {
    const res = [];
    const matched = [];
    const queue = [];
    const minPrice = pricing[0];
    const maxPrice = pricing[1];
    const visited = new Set();
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const getPosFlag = (row, col) => `${row}&${col}`;
    const isInvalidPos = (row, col) => row < 0 || row >= maxRow || col < 0 || col >= maxCol || grid[row][col] === 0;

    queue.push([start[0], start[1], 0]);
    visited.add(getPosFlag(start[0], start[1]));
    while (queue.length) {
        let [row, col, step] = queue.shift();
        const curPrice = grid[row][col];

        step++;
        if (curPrice > 1 && curPrice >= minPrice && curPrice <= maxPrice) {
            matched.push([step, curPrice, row, col]);
        }
        for (let dir of directions) {
            const aRow = row + dir[0];
            const aCol = col + dir[1];

            if (!isInvalidPos(aRow, aCol) && !visited.has(getPosFlag(aRow, aCol))) {
                queue.push([aRow, aCol, step]);
                visited.add(getPosFlag(aRow, aCol));
            }
        }
    }
    matched.sort((item1, item2) => {
        if (item1[0] === item2[0]) {
            if (item1[1] === item2[1]) {
                if (item1[2] === item2[2]) {
                    return item1[3] - item2[3];
                } else {
                    return item1[2] - item2[2];
                }
            } else {
                return item1[1] - item2[1];
            }
        } else {
            return item1[0] - item2[0];
        }
    });
    for (let i = 0, len = Math.min(k, matched.length); i < len; i++) {
        const tar = matched[i];

        res.push([tar[2], tar[3]]);
    }

    return res;
};
