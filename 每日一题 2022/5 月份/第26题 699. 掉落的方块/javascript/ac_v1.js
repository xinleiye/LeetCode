/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    const total = positions.length;
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        const left1 = positions[i][0];
        const right1 = positions[i][0] + positions[i][1] - 1;
        let height = positions[i][1];

        for (let j = 0; j < i; j++) {
            let left2 = positions[j][0];
            let right2 = positions[j][0] + positions[j][1] - 1;

            if (right1 >= left2 && right2 >= left1) {
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
