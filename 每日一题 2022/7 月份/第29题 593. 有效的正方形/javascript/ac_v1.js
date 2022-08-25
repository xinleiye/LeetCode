/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    const dis = new Array(6);
    const calcDis = ([x1, y1], [x2, y2]) => Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);

    dis[0] = calcDis(p1, p2);
    dis[1] = calcDis(p1, p3);
    dis[2] = calcDis(p1, p4);
    dis[3] = calcDis(p2, p3);
    dis[4] = calcDis(p2, p4);
    dis[5] = calcDis(p3, p4);
    dis.sort((d1, d2) => d1 - d2);
    for (let i = 1; i < 4; i++) {
        if (dis[i] !== dis[i - 1]) {
            return false;
        }
    }
    if (dis[4] !== dis[5]) {
        return false;
    }
    if (dis[0] === 0) {
        return false;
    }

    return true;
};
