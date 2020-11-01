/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let res = 0;
    let xs = [];
    
    points.forEach(point => {
        xs.push(point[0]);
    });
    
    xs.sort((val1, val2) => {
        return val1 - val2;
    });
    
    for (let i = 1; i < xs.length; i++) {
        res = Math.max(res, xs[i] - xs[i - 1]);
    }
    
    return res;
};
