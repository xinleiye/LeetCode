/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let res = Infinity;
    let pathSum = new Array(triangle[triangle.length - 1].length);

    pathSum[0] = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        let lastIndex = triangle[i].length - 1;

        pathSum[lastIndex] = pathSum[lastIndex - 1] + triangle[i][lastIndex];
        for (let j = triangle[i].length - 2; j > 0; j--) {
            pathSum[j] = triangle[i][j] + Math.min(pathSum[j], pathSum[j - 1]);
        }
        pathSum[0] = pathSum[0] + triangle[i][0];
    }

    for (let i = 0; i < pathSum.length; i++) {
        res = pathSum[i] < res ? pathSum[i] : res;
    }

    return res;
};
