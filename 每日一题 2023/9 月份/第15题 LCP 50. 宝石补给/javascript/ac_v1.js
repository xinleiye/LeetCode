/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function(gem, operations) {
    for (const [p1, p2] of operations) {
        const count = gem[p1] >>> 1;

        gem[p2] += count;
        gem[p1] -= count;
    }

    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (const g of gem) {
        min = Math.min(min, g);
        max = Math.max(max, g);
    }

    return max - min;
};
