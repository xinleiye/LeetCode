/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    let waterStack = [];
    let waterSet = new Set();
    let getWaterString = (water1, water2) => {
        return water1 + "x" + water2;
    };

    waterStack.push([0, 0]);
    while (waterStack.length) {
        let [waterX, waterY] = waterStack.pop();
        let waterStr = getWaterString(waterX, waterY);

        if (waterX === z || waterY === z || (waterX + waterY) === z) {
            return true;
        }
        if (waterSet.has(waterStr)) {
            continue;
        }
        waterSet.add(waterStr);
        // 装满x
        waterStack.push([x, waterY]);
        // 装满y
        waterStack.push([waterX, y]);
        // 倒空x
        waterStack.push([0, waterY]);
        // 倒空y
        waterStack.push([waterX, 0]);
        // 从x倒入y，直到x为空或y为满
        waterStack.push([waterX - Math.min(waterX, y - waterY), waterY + Math.min(waterX, y - waterY)]);
        // 从y倒入x，直到y为空或x为满
        waterStack.push([waterX + Math.min(x - waterX, waterY), waterY - Math.min(x - waterX, waterY)]);
    }

    return false;
};
