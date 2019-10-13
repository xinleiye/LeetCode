/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    let res = [];
    // 国王可移动的八个方向
    let dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    let validPos = function (x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
    let queenLength = queens.length;

    for (let i = 0; i < 8; i++) {
        let dir = dirs[i];
        let x = king[1];
        let y = king[0];

        x += dir[0];
        y += dir[1];
        while (validPos(x, y)) {
            let j;
            for (j = 0; j < queenLength; j++) {
                if (x === queens[j][1] && y === queens[j][0]) {
                    res.push([y, x]);
                    break;
                }
            }
            if (j < queenLength) {
                break;
            } else {
                x += dir[0];
                y += dir[1];
            }
        }
    }
    return res;
};
