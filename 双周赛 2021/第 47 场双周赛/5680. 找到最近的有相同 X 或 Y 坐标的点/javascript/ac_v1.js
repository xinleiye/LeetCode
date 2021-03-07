/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let res = -1;
    let distance = 1e5;
    
    points.forEach((item, index) => {
        if (item[0] === x) {
            if (Math.abs(item[1] - y) < distance) {
                distance = Math.abs(item[1] - y);
                res = index;
            }
        } else if (item[1] === y) {
            if (Math.abs(item[0] - x) < distance) {
                distance = Math.abs(item[0] - x);
                res = index;
            }
        }
    });
    
    return res;
};
