/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let pre = [coordinates[1][1] - coordinates[0][1], coordinates[1][0] - coordinates[0][0]];

    for (let i = 2, len = coordinates.length; i < len; i++) {
        let cur = [coordinates[i][1] - coordinates[i - 1][1], coordinates[i][0] - coordinates[i - 1][0]];

        if (pre[0] * cur[1] !== pre[1] * cur[0]) {
            return false;
        } else {
            pre = cur;
        }
    }
    return true;
};
