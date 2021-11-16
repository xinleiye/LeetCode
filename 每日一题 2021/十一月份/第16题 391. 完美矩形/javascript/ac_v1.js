/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let area = 0;
    let [minX1, minY1, maxX2, maxY2] = rectangles[0];
    const pointMap = new Map();
    const getPointFlag = (x, y) => `${x}#${y}`;
    const addToMap = (map, str) => {
        if (map.has(str)) {
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1);
        }
    };

    for (const rect of rectangles) {
        const [x1, y1, x2, y2] = rect;

        area += (x2 - x1) * (y2 - y1);

        minX1 = Math.min(minX1, x1);
        minY1 = Math.min(minY1, y1);
        maxX2 = Math.max(maxX2, x2);
        maxY2 = Math.max(maxY2, y2);

        addToMap(pointMap, getPointFlag(x1, y1));
        addToMap(pointMap, getPointFlag(x1, y2));
        addToMap(pointMap, getPointFlag(x2, y2));
        addToMap(pointMap, getPointFlag(x2, y1));
    }

    if (area !== (maxX2 - minX1) * (maxY2 - minY1) ||
        pointMap.get(getPointFlag(minX1, minY1)) !== 1 ||
        pointMap.get(getPointFlag(minX1, maxY2)) !== 1 ||
        pointMap.get(getPointFlag(maxX2, maxY2)) !== 1 ||
        pointMap.get(getPointFlag(maxX2, minY1)) !== 1) {
        return false;
    }

    pointMap.delete(getPointFlag(minX1, minY1));
    pointMap.delete(getPointFlag(minX1, maxY2));
    pointMap.delete(getPointFlag(maxX2, maxY2));
    pointMap.delete(getPointFlag(maxX2, minY1));

    for (const keyVal of pointMap.entries()) {
        if (keyVal[1] !== 2 && keyVal[1] !== 4) {
            return false;
        }
    }

    return true;
};
