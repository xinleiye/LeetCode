/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const valid = (row, col) => {
        return row >= 0 && row < maxRow && col >= 0 && col < maxRow;
    };
    const bfsSearch = (row, col, flag, index) => {
        let land = 0;
        let stack = [[row, col]];

        flag[row][col] = index;
        while (stack.length) {
            const newStack = [];

            for (const [aRow, aCol] of stack) {
                land++;
                for (const [r, c] of dir) {
                    const newRow = aRow + r;
                    const newCol = aCol + c;

                    if (valid(newRow, newCol) && !flag[newRow][newCol] && grid[newRow][newCol] === 1) {
                        flag[newRow][newCol] = index;
                        newStack.push([newRow, newCol]);
                    }
                }
            }
            stack = newStack;
        }

        return land;
    };
    const islandMap = new Map();
    const island = new Array(maxRow).fill(0).map(() => new Array(maxRow).fill(0));
    let islandIndex = 1;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (grid[i][j] === 1 && !island[i][j]) {
                const area = bfsSearch(i, j, island, islandIndex);

                islandMap.set(islandIndex, area);
                res = Math.max(res, area);
                islandIndex++;
            }
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (grid[i][j] === 0) {
                const islandSet = new Set();

                area = 1;
                for (const [r, c] of dir) {
                    const row = i + r;
                    const col = j + c;

                    if (valid(row, col)) {
                        const index = island[row][col];
                        
                        if (index && !islandSet.has(index)) {
                            area += islandMap.get(index);
                            islandSet.add(index);
                        }
                    }
                }
                res = Math.max(res, area);
            }
        }
    }

    return res;
};
