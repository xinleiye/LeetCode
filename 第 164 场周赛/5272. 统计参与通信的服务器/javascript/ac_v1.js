/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let res = 0;
    let row = grid.length;
    let col = grid[0].length;
    // 记录参与通信的服务器是否被统计过，1：统计过；0：没有
    let flags = (new Array(row)).fill(0);

    for (let i = 0; i < row; i++) {
        flags[i] = (new Array(col)).fill(0);
    }

    // 统计每行的参与统计的服务器数量，此时每行参与通信的服务器必然是没被统计过的
    for (let i = 0; i < row; i++) {
        let nums = 0;

        for (let j = 0; j < col; j++) {
            nums += grid[i][j] % 2;
        }
        if (nums >= 2) {
            for(let j = 0; j < col; j++) {
                flags[i][j] = grid[i][j];
            }
            res += nums;
        }
    }
    // 统计每列可参与通信的服务器的数量
    for (let i = 0; i < col; i++) {
        let nums = 0;

        for (let j = 0; j < row; j++) {
            nums += grid[j][i] % 2;
        }
        if (nums >= 2) {
            for(let j = 0; j < row; j++) {
                // 如果当前位置有服务器，且被统计过，则跳过
                if (flags[j][i] || grid[j][i] === 0) {
                    continue;
                } else {
                    flags[j][i] = grid[j][i];
                    res++;
                }
            }
        }
    }

    return res;
};
