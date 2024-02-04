/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const maxRow = mat.length;
    let left = 0;
    let right = maxRow - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;
        const maxRowIndex = maxElementIndex(mat[mid]);

        if (mid - 1 >= 0 && mat[mid][maxRowIndex] < mat[mid - 1][maxRowIndex]) {
            right = mid - 1;
            continue;
        }
        if (mid + 1 < maxRow && mat[mid][maxRowIndex] < mat[mid + 1][maxRowIndex]) {
            left = mid + 1;
            continue;
        }

        return [mid, maxRowIndex];
    }

    return [];
};

function maxElementIndex(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[index] < arr[i]) {
            index = i;
        }
    }

    return index;
}
