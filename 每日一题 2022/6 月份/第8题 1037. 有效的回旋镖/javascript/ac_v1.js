/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    return (y1 - y2) * (x2 - x3) !== (x1 - x2) * (y2 - y3);
};
