/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const maxRow = heights.length;
    const maxCol = heights[0].length;
    const toPacific = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(false));
    const toAtlantic = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(false));
    const bfsSearch = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }

        const dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];
        const stack = [[row, col]];
        ocean[row][col] = true;
        while (stack.length) {
            const [r, c] = stack.shift();

            for (const [dr, dc] of dir) {
                const ar = r + dr;
                const ac = c + dc;

                if (ar >= 0 && ac >= 0 && ar < maxRow && ac < maxCol && heights[ar][ac] >= heights[r][c] && !ocean[ar][ac]) {
                    ocean[ar][ac] = true;
                    stack.push([ar, ac]);
                }
            }
        }
    };

    for (let i = 0; i < maxRow; i++) {
        bfsSearch(i, 0, toPacific);
    }
    for (let i = 0; i < maxCol; i++) {
        bfsSearch(0, i, toPacific);
    }
    for (let i = 0; i < maxRow; i++) {
        bfsSearch(i, maxCol - 1, toAtlantic);
    }
    for (let i = 0; i < maxCol; i++) {
        bfsSearch(maxRow - 1, i, toAtlantic);
    }

    const res = [];
    for (let i = 0;  i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (toPacific[i][j] && toAtlantic[i][j]) {
                res.push([i, j]);
            }
        }
    }

    return res;
};
