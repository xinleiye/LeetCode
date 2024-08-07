/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
    const minObj = {};
    for (let i = 0; i < 26; i++) {
        minObj[String.fromCharCode(i + 97)] = 1e9 + 1;
    }

    let subMin = 1e9 + 1;
    const length = s.length;
    for (let i = 0; i < length; i++) {
        const dis = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
        if (dis < minObj[s[i]]) {
            subMin = Math.min(subMin, minObj[s[i]]);
            minObj[s[i]] = dis;
        } else if (dis < subMin) {
            subMin = dis;
        }
    }

    let res = 0;
    for (let i = 0; i < 26; i++) {
        if (minObj[String.fromCharCode(i + 97)] < subMin) {
            res++;
        }
    }

    return res;
};
