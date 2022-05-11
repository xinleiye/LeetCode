/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    const pointSet = new Set();
    const generatePointFlag = (x, y) => `${x}&${y}`;

    for (const [x, y, r] of circles) {
        const rs = Math.pow(r, 2);

        for (let i = x - r; i <= x + r; i++) {
            for (let j = y -r; j <= y + r; j++) {
                if (Math.pow(i - x, 2) + Math.pow(j - y, 2) <= rs) {
                    pointSet.add(generatePointFlag(i, j));
                }
            }
        }
    }

    return pointSet.size;
};
