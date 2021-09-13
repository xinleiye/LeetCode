/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0;

    points.forEach(p1 => {
        const disMap = new Map();

        points.forEach(p2 => {
            const dis = Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);

            if (disMap.has(dis)) {
                disMap.set(dis, disMap.get(dis) + 1);
            } else {
                disMap.set(dis, 1);
            }
        });

        disMap.forEach(val => {
            res += val * (val - 1);
        });
    });

    return res;
};
