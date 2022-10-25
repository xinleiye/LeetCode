/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let res = 0;
    const max = grid.length;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const [island1, island2] = getIsland(grid, dir);
    const island2Set = new Set();
    const visited = new Array(max).fill(0).map(() => new Array(max).fill(false));

    for (const [r, c] of island2) {
        island2Set.add(`${r}#${c}`);
    }
    while (island1.length) {
        const length = island1.length;

        for (let i = 0; i < length; i++) {
            const [r, c] = island1.shift();

            visited[r][c] = true;
            for (const [dr, dc] of dir) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < max && nc >= 0 && nc < max && !visited[nr][nc]) {
                    
                    if (grid[nr][nc] === 0) {
                        island1.push([nr, nc]);
                        visited[nr][nc] = true;
                    } else if (island2Set.has(`${nr}#${nc}`)) {
                        return res;
                    }
                }
            }
        }
        res++;
    }

    return 0;
};

function getIsland (grid, dir) {
    const max = grid.length;
    const islands = [];
    const visited = new Array(max).fill(0).map(() => new Array(max).fill(false));

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < max; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                const island = [[i, j]];
                let stack = [[i, j]];
                
                visited[i][j] = true;
                while (stack.length) {
                    const [r, c] = stack.shift();

                    for (const [dr, dc] of dir) {
                        const nr = r + dr;
                        const nc = c + dc;

                        if (nr >= 0 && nr < max && nc >= 0 && nc < max && !visited[nr][nc] && grid[nr][nc] === 1) {
                            island.push([nr, nc]);
                            stack.push([nr, nc]);
                            visited[nr][nc] = true;
                        }
                    }
                }
                islands.push(island);
            }
        }
    }

    return islands;
}
