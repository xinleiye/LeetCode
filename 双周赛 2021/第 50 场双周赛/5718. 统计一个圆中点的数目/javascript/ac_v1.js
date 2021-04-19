/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
    const res = new Array(queries.length).fill(0);
    const length = points.length;
    let getDistance = (p1, p2) => {
        return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
    };

    queries.forEach((qp, qIndex) => {
        let count = 0;
        const dis = Math.pow(qp[2], 2);

        for (let i = 0; i < length; i++) {
            if (getDistance(points[i], [qp[0], qp[1]]) <= dis) {
                count++;
            }
        }
        res[qIndex] = count;
    });

    return res;
};
