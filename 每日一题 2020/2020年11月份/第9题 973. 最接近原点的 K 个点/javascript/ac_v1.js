/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let res = [];
    let distance = [];
    let disIndex = [];

    for (let i = 0; i < points.length; i++) {
        distance.push(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
        disIndex[i] = i;
    }

    disIndex.sort((val1, val2) => {
        return distance[val1] - distance[val2];
    });

    for (let i = 0; i < K; i++) {
        let index = disIndex[i];
        res.push([points[index][0], points[index][1]]);
    }

    return res;
};
