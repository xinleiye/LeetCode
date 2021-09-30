/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let res = 0;
    const getArea = (x1, y1, x2, y2) => {
        return Math.abs((y2 - y1) * (x2 - x1));
    };

    res += getArea(ax1, ay1, ax2, ay2);
    res += getArea(bx1, by1, bx2, by2);
    if (true) {
        res -= getArea();
    }

    return res;
};
