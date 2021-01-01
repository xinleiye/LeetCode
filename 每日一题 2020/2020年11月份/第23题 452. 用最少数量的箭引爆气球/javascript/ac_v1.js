/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let res = 0;
    const totalLen = points.length;
    let scan;
    let index;

    points.sort((val1, val2) => {
        return val1[1] - val2[1];
    });

    index = 0;
    while (index < totalLen) {
        scan = points[index][1];
        while (index < totalLen && points[index][1] >= scan && points[index][0] <= scan) {
            index++;
        }
        res++;
    }

    return res;
};
