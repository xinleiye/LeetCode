/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minDis = 1e5;
    let res = -1;
    const total = points.length;

    for (let i = 0; i < total; i++) {
        const [px, py] = points[i];

        if (px === x || py === y) {
            const curDis = Math.abs(px - x) + Math.abs(py - y);

            if (curDis < minDis) {
                res = i;
                minDis = curDis;
            }
        }
    }

    return res;
};
