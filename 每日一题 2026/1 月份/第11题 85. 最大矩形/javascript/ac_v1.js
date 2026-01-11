/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const left = Array.from({ length: maxRow}, _ => new Array(maxCol + 1).fill(0));
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (matrix[i][j] === "1") {
                left[i][j + 1] = left[i][j] + 1;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (matrix[i][j] === "1") {
                let width = left[i][j + 1];
                let area = width;

                for (let k = i - 1; k >= 0; k--) {
                    width = Math.min(width, left[k][j + 1]);
                    area = Math.max(area, width * (i - k + 1));
                }
                res = Math.max(res, area);
            }
        }
    }

    return res;
};
