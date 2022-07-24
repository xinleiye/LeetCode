/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let res = 0;
    let sum = 0;
    const total = distance.length;
    const s = Math.min(start, destination);
    const d = Math.max(start, destination);

    for (let i = 0; i < total; i++) {
        sum += distance[i];
        if (i >= s && i < d) {
            res += distance[i];
        }
    }

    return Math.min(res, sum - res);
};
