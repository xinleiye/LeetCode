/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    const total = points.length;
    let res = 0;

    for (let i = 0; i < total; i++) {
        const [x1, y1] = points[i];

        for (let j = 0; j < total; j++) {
            let valid = true;
            const [x2, y2] = points[j];

            if (i === j || !(x1 <= x2 && y1 >= y2)) {
                continue;
            }
            if (total === 2) {
                res++;
                continue;
            }
            for (let k = 0; k < total; k++) {
                const [x3, y3] = points[k];

                if (k === i || k === j) {
                    continue;
                }
                if (x3 >= x1 && x3 <= x2 && y3 <= y1 && y3 >= y2) {
                    valid = false;
                }
                if (!valid) {
                    break;
                }
            }
            if (valid) {
                res++;
            }
        }
    }

    return res;
};
