/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    const res = [];
    const total = height.length;

    for (let i = 1; i < total; i++) {
        if (height[i - 1] > threshold) {
            res.push(i);
        }
    }

    return res;
};
