/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let res = 0;
    let row = n;
    let col = m;
    let pointMap = new Map();

    for (let i = 0; i < indices.length; i++) {
        for (let j = 0; j < col; j++) {
            let point = [indices[i][0], j].toString();
            if (pointMap.has(point)) {
                pointMap.set(point, pointMap.get(point) + 1);
            } else {
                pointMap.set(point, 1);
            }
        }
        for (let j = 0; j < row; j++) {
            let point = [j, indices[i][1]].toString();
            if (pointMap.has(point)) {
                pointMap.set(point, pointMap.get(point) + 1);
            } else {
                pointMap.set(point, 1);
            }
        }
    }

    pointMap.forEach((value) => {
        if (value % 2) {
            res++;
        };
    });

    return res;
};
