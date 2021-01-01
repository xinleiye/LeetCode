/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let maxRow = image.length;
    let maxCol = image[0].length;
    let oldColor = image[sr][sc];
    let queue = [];
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    queue.push([sr, sc]);
    while (queue.length) {
        let point = queue.shift();

        image[point[0]][point[1]] = newColor;
        for (let i = 0; i < 4; i++) {
            let row = point[0] + directions[i][0];
            let col = point[1] + directions[i][1];

            if (row < 0 || row >= maxRow || col < 0 || col >= maxCol || image[row][col] === newColor) {
                continue;
            }
            if (image[row][col] === oldColor) {
                queue.push([row, col]);
            }
        }
    }

    return image;
};
