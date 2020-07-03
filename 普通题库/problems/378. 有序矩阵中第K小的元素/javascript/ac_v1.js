/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let left, right;
    let maxLen;
    let getCountLtNum = (matrix, num, maxLen) => {
        let count = 0;
        let row = maxLen - 1;
        let col = 0;

        while (row >= 0 && col < maxLen) {
            if (matrix[row][col] <= num) {
                col++;
                count += row + 1;
            } else {
                row--;
            }
        }

        return count;
    };

    if (matrix.length <= 0 || matrix[0].length <= 0) {
        return;
    } else {
        maxLen = matrix.length;
        left = matrix[0][0];
        right = matrix[maxLen - 1][maxLen - 1];
    }

    while (left < right) {
        // let mid = left + ((right - left) >>> 1);
        let mid = (left + right) >>> 1;

        if (getCountLtNum(matrix, mid, maxLen) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
