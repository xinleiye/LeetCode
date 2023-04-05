/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let res = 0;
    const total = points.length;

    points.sort((p1, p2) => p1[0] - p2[0]);
    for (let i = 1; i < total; i++) {
        res = Math.max(res, points[i][0] - points[i - 1][0]);
    }

    return res;
};
