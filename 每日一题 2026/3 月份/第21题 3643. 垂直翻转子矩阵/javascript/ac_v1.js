/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    for (let i = y; i < y + k; i++) {
        let left = x;
        let right = x + k - 1;
        let num = 0;

        while (left < right) {
            num = grid[left][i];
            grid[left][i] = grid[right][i];
            grid[right][i] = num;
            left++;
            right--;
        }
    }

    return grid;
};
