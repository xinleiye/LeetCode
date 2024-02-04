/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0;

    for (const [x1, y1] of points) {
        const disMap = new Map();

        for (const [x2, y2] of points) {
            const dis = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);

            if (disMap.has(dis)) {
                disMap.set(dis, disMap.get(dis) + 1);
            } else {
                disMap.set(dis, 1);
            }
        }
        disMap.forEach(count => {
            res += count * (count - 1);
        });
    }

    return res;
};
