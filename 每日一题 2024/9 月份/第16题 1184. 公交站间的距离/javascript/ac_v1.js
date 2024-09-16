/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let totalDis = 0;
    let dis = 0;
    const total = distance.length;

    for (let i = 0; i < total; i++) {
        totalDis += distance[i];
        if ((i >= start && i < destination) || (i < start && i >= destination)) {
            dis += distance[i];
        }
    }

    return Math.min(dis, totalDis - dis);
};
