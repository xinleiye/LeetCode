/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const MAX_LINE = 8;
    const queenPos = new Array(MAX_LINE).fill(0).map(() => new Array(MAX_LINE).fill(false));
    for (const [x, y] of queens) {
        queenPos[x][y] = true;
    }

    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const res = [];
    const validPos = (x, y, max) => {
        return (x >= 0 && x < max) && (y >= 0 && y < max);
    };
    for (const [dx, dy] of dirs) {
        let kx = king[0] + dx;
        let ky = king[1] + dy;
        while (validPos(kx, ky, MAX_LINE)) {
            if (queenPos[kx][ky]) {
                res.push([kx, ky]);
                break;
            }
            kx += dx;
            ky += dy;
        }
    }

    return res;
};
