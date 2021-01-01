/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let maxRow = dungeon.length;
    let maxCol = dungeon[0].length;
    let health = new Array(maxRow + 1);

    for (let i = 0; i <= maxRow; i++) {
        health[i] = new Array(maxCol + 1).fill(Infinity);
    }

    health[maxRow][maxCol - 1] = 1;
    health[maxRow - 1][maxCol] = 1;

    for (let i = maxRow - 1; i >= 0; i--) {
        for (let j = maxCol - 1; j >= 0; j--) {
            health[i][j] = Math.max(Math.min(health[i + 1][j], health[i][j + 1]) - dungeon[i][j], 1);
        }
    }

    return health[0][0];
};
