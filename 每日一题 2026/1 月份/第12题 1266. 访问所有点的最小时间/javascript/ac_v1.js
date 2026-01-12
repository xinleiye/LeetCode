/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    const total = points.length;

    for (let i = 1; i < total; i++) {
        const dx = Math.abs(points[i - 1][0] - points[i][0]);
        const dy = Math.abs(points[i - 1][1] - points[i][1]);

        res += Math.min(dx, dy) + Math.abs(dx - dy);
    }

    return res;
};
