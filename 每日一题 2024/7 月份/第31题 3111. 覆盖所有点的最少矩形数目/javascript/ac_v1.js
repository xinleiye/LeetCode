/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
    points.sort((p1, p2) => p1[0] - p2[0]);

    let res = 0;
    let boundary = -1;
    for (const p of points) {
        if (p[0] > boundary) {
            boundary = p[0] + w;
            res++;
        }
    }

    return res;
};
