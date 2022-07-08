/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;

    for (const pos of position) {
        if (pos % 2) {
            odd++;
        } else {
            even++;
        }
    }

    return Math.min(even, odd);
};
