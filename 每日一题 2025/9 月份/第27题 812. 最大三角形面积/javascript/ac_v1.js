/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res = 0;
    const total = points.length;

    for (let i = 0; i < total - 2; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < total - 1; j++) {
            const p2 = points[j];
            for (let k = j + 1; k < total; k++) {
                const area = calcTriangleArea(p1, p2, points[k]);
                res = Math.max(res, area);
            }
        }
    }

    return res;
};

// 向量叉乘求三角形面积
function calcTriangleArea([x1, y1], [x2, y2], [x3, y3]) {
    return 0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2);
}
