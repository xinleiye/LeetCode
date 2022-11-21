/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    const block = Math.ceil(n / 25);
    if (block >= 179) {
        return 1;
    }

    const cache = new Array(block + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const dfsSerch = (a, b) => {
        if (a <= 0 && b <= 0) {
            return 0.5;
        } else if (a <= 0) {
            return 1;
        } else if (b <= 0) {
            return 0;
        }
        if (cache[a][b] === 0) {
            cache[a][b] = 0.25 * (dfsSerch(a - 4, b) + dfsSerch(a - 3, b - 1) + dfsSerch(a - 2, b - 2) + dfsSerch(a - 1, b - 3));
        }

        return cache[a][b];
    };

    return dfsSerch(block, block);
};
