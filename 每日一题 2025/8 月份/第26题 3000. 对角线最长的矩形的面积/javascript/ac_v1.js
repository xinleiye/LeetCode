/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let res = 0;
    let maxDiagonal = 0;

    for (const [x, y] of dimensions) {
        const diagonal = x * x + y * y;

        if (diagonal > maxDiagonal) {
            res = x * y;
            maxDiagonal = diagonal;
        } else if (diagonal === maxDiagonal) {
            res = Math.max(res, x * y);
        }
    }

    return res;
};
