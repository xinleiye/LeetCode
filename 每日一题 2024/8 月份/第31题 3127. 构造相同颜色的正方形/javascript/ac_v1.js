/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    const dir = [[0, 0], [0, 1], [1, 1], [1, 0]];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let w = 0;
            let b = 0;

            for (const [r, c] of dir) {
                if (grid[i + r][j + c] === "B") {
                    b++;
                } else {
                    w++;
                }
            }
            if (b >= 3 || w >= 3) {
                return true;
            }
        }
    }

    return false;
};
