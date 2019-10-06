/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let res = 0;
    let visited = [];
    let gridx = grid[0].length;
    let gridy = grid.length;
    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // 右，下，左，上
    let getGold = function (x, y, cur, grid) {
        let posx;
        let posy;
        let now;

        visited[y][x] = 1;
        now = grid[y][x] + cur;
        res = now > res ? now : res;
        for (let i = 0, len = dir.length; i < len; i++) {
            posx = x + dir[i][0];
            posy = y + dir[i][1];
            if (posx >= 0 && posy >= 0 && posx < gridx && posy < gridy && !visited[posy][posx] && grid[posy][posx]) {
                getGold(posx, posy, now, grid);
            }
        }
        visited[y][x] = 0;
    }

    for (let i = 0; i < gridy; i++) {
        visited.push((new Array(gridx)).fill(0));
    }

    for (let i = 0; i < gridy; i++) {
        for (let j = 0; j < gridx; j++) {
            if (grid[i][j]) {
                getGold(j, i, 0, grid);
            }
        }
    }
    
    return res;
};
