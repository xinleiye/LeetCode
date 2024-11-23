/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
    let rowChange = 0;
    let colChange = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;

    for (let i = 0; i < maxRow; i++) {
        let left = 0;
        let right = maxCol - 1;
        
        while (left < right) {
            if (grid[i][left] !== grid[i][right]) {
                rowChange++;
            }
            left++;
            right--;
        }
    }
    for (let i = 0; i < maxCol; i++) {
        let left = 0;
        let right = maxRow - 1;

        while (left < right) {
            if (grid[left][i] !== grid[right][i]) {
                colChange++;
            }
            left++;
            right--;
        }
    }

    return Math.min(rowChange, colChange);
};
