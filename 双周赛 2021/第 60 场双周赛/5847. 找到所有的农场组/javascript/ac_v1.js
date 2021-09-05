/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const res = [];
    const maxRow = land.length;
    const maxCol = land[0].length;
    const isVisited = (row, col) => {
        for (let item of res) {
            if (row >= item[0] && row <= item[2] && col >= item[1] && col <= item[3]) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (land[i][j] === 0 || isVisited(i, j)) {
                continue;
            }
            if (land[i][j] === 1) {
                const startR = i;
                const startC = j;
                let endR = i + 1;
                let endC = j + 1;

                while (endR < maxRow) {
                    if (land[endR][j] === 1) {
                        endR++;
                    } else {
                        break;
                    }
                }
                while (endC < maxCol) {
                    if (land[i][endC] === 1) {
                        endC++;
                    } else {
                        break;
                    }
                }
                res.push([startR, startC, endR - 1, endC - 1]);
            }
        }
    }

    return res;
};
