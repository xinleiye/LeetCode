/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
    let res = -Infinity;
    // 单调递减队列
    let queue = [];

    for (let j = 0; j < points.length; j++) {
        let xj = points[j][0];
        let yj = points[j][1];

        while (queue.length > 0 && (xj - queue[0][0]) > k) {
            queue.shift();
        }

        if (queue.length > 0) {
            res = Math.max(res, yj + xj + queue[0][1]- queue[0][0]);
        }

        while (queue.length && ((queue[queue.length - 1][1] - queue[queue.length - 1][0]) < (yj - xj))) {
            queue.pop();
        }

        queue.push(points[j]);
    }

    return res;
};
