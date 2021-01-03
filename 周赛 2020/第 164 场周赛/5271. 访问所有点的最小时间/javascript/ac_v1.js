/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    let des;
    let src;
    
    for(let i = 1; i < points.length; i++) {
        des = points[i];
        src = points[i - 1];

        res += Math.max(Math.abs(des[0] - src[0]), Math.abs(des[1] - src[1]));
    }

    return res;
};
