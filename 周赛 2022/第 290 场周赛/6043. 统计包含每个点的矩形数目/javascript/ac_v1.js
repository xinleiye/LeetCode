/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
    const res = [];
    const heights = [];
    const widths = [];

    rectangles.sort(([w1, h1], [w2, h2]) => {
        if (w1 !== w2) {
            return w1 - w2;
        } else {
            h1 - h2;
        }
    });
    for (const [w, h] of rectangles) {
        widths.push(w);
        heights.push(h);
    }
    for (const [p1, p2] of points) {
        let wCount = 0; // binarySearch(widths, p1);
        for (let i = widths.length - 1; i >= 0; i--) {
            if (widths[i] >= p1) {
                wCount++;
            } else {
                break;
            }
        }

        let hCount = 0; // binarySearch(heights, p2);
        for (let i = 0; i < wCount; i++) {
            if (heights[heights.length - i - 1] >= p2) {
                hCount++;
            }
        }

        res.push(Math.min(wCount, hCount));
    }

    return res;
};
