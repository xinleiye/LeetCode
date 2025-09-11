/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const dx = Math.abs(x - z);
    const dy = Math.abs(y - z);

    if (dx < dy) {
        return 1;
    } else if (dx > dy) {
        return 2;
    }

    return 0;
};
