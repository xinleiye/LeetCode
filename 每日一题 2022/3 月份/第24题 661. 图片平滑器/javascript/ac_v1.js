/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const maxRow = img.length;
    const maxCol = img[0].length;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const isValid = (row, col) => {
        return !(row < 0 || row >= maxRow || col < 0 || col >= maxCol);
    };
    const calcColor = (row, col) => {
        let count = 1;
        let sum = img[row][col];
        for (const dir of directions) {
            const aRow = row + dir[0];
            const aCol = col + dir[1];

            if (isValid(aRow, aCol)) {
                sum += img[aRow][aCol];
                count++;
            }
        }
        return Math.floor(sum / count);
    };
    const res = new Array(maxRow).fill(0).map(() => new Array(maxCol));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res[i][j] = calcColor(i, j);
        }
    }

    return res;
};
