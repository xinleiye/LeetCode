/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    let visited = new Array(grid.length);
    let rowLen = grid.length;
    let colLen;
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let search = (aRow, aCol) => {
        let res = 0;

        if (aRow < 0 || aRow >= rowLen || aCol < 0 || aCol >= colLen || grid[aRow][aCol] === "0" || visited[aRow][aCol] === true) {
            return 0;
        }

        visited[aRow][aCol] = true;
        for (let i = 0; i < 4; i++) {
            res += search(aRow + directions[i][0], aCol + directions[i][1]);
        }

        return parseInt(grid[aRow][aCol]) + res;
    };

    if (rowLen === 0) {
        return 0;
    }

    colLen = grid[0].length;

    for (let i = 0; i < rowLen; i++) {
        visited[i] = new Array(colLen).fill(false);
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === "1" && visited[i][j] === false) {
                if (search(i, j) > 0) {
                    res++;
                }
            }
        }
    }

    return res;
};
