/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let res = 0;
    const rectMap = new Map();

    rectangles.forEach(item => {
        const key = item[0] / item[1];

        if (rectMap.has(key)){
            rectMap.set(key, rectMap.get(key) + 1);
        } else {
            rectMap.set(key, 1);
        }
    });
    rectMap.forEach(val => {
        if (val > 1) {
            res += val * (val - 1) / 2;
        }
    });

    return res;
};
