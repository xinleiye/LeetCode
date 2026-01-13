/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let totalArea = 0;
    let upY = 0;
    let lowY = Infinity;
    const total = squares.length;
    for (let i = 0; i < total; i++) {
        const s = squares[i];
        const y = s[1];
        const l = s[2];
        totalArea += l * l;
        upY = Math.max(upY, y + l);
        lowY = Math.min(lowY, y);
    }

    const check = (squares, lineY, maxArea) => {
        let area = 0;
        const total = squares.length;
        for (let i = 0; i < total; i++) {
            const s = squares[i];
            const y = s[1];
            const l = s[2];
            if (y < lineY) {
                area += l * Math.min(l, lineY - y);
            }
        }

        return area >= maxArea / 2;
    };
    const eps = 1e-5;
    while (Math.abs(upY - lowY) > eps) {
        const mid = (upY + lowY) / 2;
        if (check(squares, mid, totalArea)) {
            upY = mid;
        } else {
            lowY = mid;
        }
    }

    return upY;
};
