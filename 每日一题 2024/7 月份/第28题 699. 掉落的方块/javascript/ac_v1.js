/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    const total = positions.length;
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        const lefti = positions[i][0];
        const righti = positions[i][0] + positions[i][1];
        let height = positions[i][1];

        for (let j = 0; j < i; j++) {
            const leftj = positions[j][0];
            const rightj = positions[j][0] + positions[j][1];

            if (righti > leftj && rightj > lefti) {
                height = Math.max(height, res[j] + positions[i][1]);
            }
        }
        res[i] = height;
    }
    for (let i = 1; i < total; i++) {
        res[i] = Math.max(res[i], res[i - 1]);
    }

    return res;
};
