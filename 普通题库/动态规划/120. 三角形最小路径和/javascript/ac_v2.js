/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let pathSum = triangle[triangle.length - 1].slice();

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0, len = triangle[i].length; j < len; j++) {
            pathSum[j] = triangle[i][j] + Math.min(pathSum[j], pathSum[j + 1]);
        }
    }

    return pathSum[0];
};
