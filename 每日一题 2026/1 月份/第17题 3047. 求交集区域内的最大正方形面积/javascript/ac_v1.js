/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    const total = bottomLeft.length;
    let maxSide = 0;

    for (let i = 0; i < total; i++) {
        if (topRight[i][0] - bottomLeft[i][0] <= maxSide || topRight[i][1] - bottomLeft[i][1] <= maxSide) {
            continue;
        }
        for (let j = i + 1; j < total; j++) {
            const w = Math.min(topRight[i][0], topRight[j][0]) - Math.max(bottomLeft[i][0], bottomLeft[j][0]);
            const h = Math.min(topRight[i][1], topRight[j][1]) - Math.max(bottomLeft[i][1], bottomLeft[j][1]);

            maxSide = Math.max(maxSide, Math.min(w, h));
        }
    }

    return maxSide * maxSide;
};
