/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let max = 0;
    let countMap = new Map();
    
    rectangles.forEach(item => {
        let len = Math.min(item[0], item[1]);
                    
        max = Math.max(len, max);
        if (countMap.has(len)) {
            countMap.set(len, countMap.get(len) + 1);
        } else {
            countMap.set(len, 1);
        }
    });
    
    return countMap.get(max);
};
