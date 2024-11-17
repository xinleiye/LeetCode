/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
    const maxRow = grid.length;
    const adjacent = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const diagonal = [[-1, -1], [-1, 1], [1, 1], [1, -1]];

    this.adjacentValueSum = {};
    this.diagonalValueSum = {};
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            let sum = 0;

            for (const [r, c] of adjacent) {
                const row = i + r;
                const col = j + c;

                if (row < 0 || row >= maxRow || col < 0 || col >= maxRow) {
                    continue;
                }
                sum += grid[row][col];
            }
            this.adjacentValueSum[grid[i][j]] = sum;

            sum = 0;
            for (const [r, c] of diagonal) {
                const row = i + r;
                const col = j + c;

                if (row < 0 || row >= maxRow || col < 0 || col >= maxRow) {
                    continue;
                }
                sum += grid[row][col];
            }
            this.diagonalValueSum[grid[i][j]] = sum;
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
    return this.adjacentValueSum[value];
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    return this.diagonalValueSum[value];
};

/**
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
