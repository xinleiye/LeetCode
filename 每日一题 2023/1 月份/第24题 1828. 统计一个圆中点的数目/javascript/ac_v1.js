/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const totalQ = queries.length;
    const res = new Array(totalQ);

    for (let i = 0; i < totalQ; i++) {
        let count = 0;
        const [x1, y1, r] = queries[i];

        for (const [x, y] of points) {
            if (Math.pow(x - x1, 2) + Math.pow(y - y1, 2) <= Math.pow(r, 2)) {
                count++;
            }
        }
        res[i] = count;
    }

    return res;
};
