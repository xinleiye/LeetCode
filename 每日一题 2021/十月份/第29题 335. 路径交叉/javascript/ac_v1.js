/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(distance) {
    const length = distance.length;

    for (let i = 3; i < length; i++) {
        if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) {
            return true;
        }
        if (i === 4 && distance[3] === distance[1]) {
            return true;
        }
        if (i >= 5 && (distance[i - 3] - distance[i - 5] <= distance[i - 1]) &&
            distance[i - 1] <= distance[i - 3] &&
            distance[i] >= distance[i - 2] - distance[i - 4] &&
            distance[i - 2] > distance[i - 4]) {
            return true;
        }
    }

    return false;
};
