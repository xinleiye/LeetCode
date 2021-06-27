/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let res = 0;
    const island1 = [];
    const island2 = [];
    const maxRow = grid1.length;
    const maxCol = grid1[0].length;
    const getIsland = (grid, flag, island) => {
        const gridVisit = new Array(maxRow);
        const dfs = (row, col, buff) => {
            const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

            gridVisit[row][col] = true;
            if (flag === 1) {
                buff.add(`${row}#${col}`);
            } else {
                buff.push(`${row}#${col}`);
            }
            for (let i = 0; i < 4; i++) {
                const aRow = row + directions[i][0];
                const aCol = col + directions[i][1];
                
                if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol || gridVisit[aRow][aCol] || grid[aRow][aCol] === 0) {
                    continue;
                }
                dfs(aRow, aCol, buff);
            }
        };

        for (let i = 0; i < maxRow; i++) {
            gridVisit[i] = new Array(maxCol).fill(false);
        }

        for (let i = 0; i < maxRow; i++) {
            for (let j = 0; j < maxCol; j++) {
                if (!gridVisit[i][j] && grid[i][j] === 1) {
                    let buff;

                    if (flag === 1) {
                        buff = new Set();
                    } else {
                        buff = [];
                    }
                    dfs(i, j, buff);
                    island.push(buff);
                }
            }
        }

    };

    getIsland(grid1, 1, island1);
    getIsland(grid2, 2, island2);

    island2.forEach(item2 => {
        const len2 = item2.length;
        const len1 = island1.length;

        for (let i = 0; i < len1; i++) {
            let flag = true;
            const item1 = island1[i];

            for (let j = 0; j < len2; j++) {
                if (!item1.has(item2[j])) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                res++;
                break;
            }
        }
    });

    return res;
};
