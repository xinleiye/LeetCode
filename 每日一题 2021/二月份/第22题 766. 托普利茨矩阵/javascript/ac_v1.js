/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const isSame = (startRow, startCol) => {
        const base = matrix[startRow++][startCol++];

        while (startRow < maxRow && startCol < maxCol) {
            if (matrix[startRow++][startCol++] !== base) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < maxRow; i++) {
        if (!isSame(i, 0)) {
            return false;
        }
    }

    for (let i = 1; i < maxCol; i++) {
        if (!isSame(0, i)) {
            return false;
        }
    }

    return true;
};
