/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
    const maxRow = img.length;
    const maxCol = img[0].length;
    const res = new Array(maxRow).fill(0).map(_ => new Array(maxCol));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            let sum = 0;
            let count = 0;

            for (const [r, c] of dir) {
                const aRow = i + r;
                const aCol = j + c;

                if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol) {
                    continue;
                }
                count++;
                sum += img[aRow][aCol];
            }
            res[i][j] = Math.floor(sum / count);
        }
    }

    return res;
};
