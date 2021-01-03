/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
    let res = Infinity;
    let getResult = false;
    let row = mat.length;
    let col = mat[0].length;
    let directions = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];
    let isAllZero = () => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (mat[i][j]) {
                    return false;
                }
            }
        }

        return true;
    };
    let transform = (x, y) => {
        for (let i = 0; i < directions.length; i++) {
            let posX = x + directions[i][0];
            let posY = y + directions[i][1];

            if (posX >= 0 && posX < col && posY >= 0 && posY < row) {
                mat[posY][posX] = mat[posY][posX] ? 0 : 1;
            }
        }
    };
    let resolve = (x, y, count) => {
        if (x >= col || y >= row) {
            return;
        }
        if (isAllZero()) {
            res = Math.min(res, count);
            getResult = true;
        }

        if (x === col - 1) {
            x = 0;
            y++;
        } else {
            x++;
        }
        resolve(x, y, count);
        transform(x, y);
        resolve(x, y, count + 1);
        transform(x, y);
    };

    resolve(-1, 0, 0);

    return getResult ? res : -1;
};
