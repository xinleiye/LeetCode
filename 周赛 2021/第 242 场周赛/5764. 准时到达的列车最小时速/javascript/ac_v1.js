/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let res = 0;
    let min = 1;
    let max = 0;
    const length = dist.length;

    dist.forEach(val => {
        max = Math.max(val, max);
    });
    max = max * 100;
    if ((length - 1 + dist[length - 1] / max) > hour) {
        return -1;
    }
    while (min <= max) {
        const mid = (min + max) >>> 1;
        let cost = 0;

        for (let i = 0; i < length - 1; i++) {
            cost += Math.ceil(dist[i] / mid);
        }
        cost += dist[length - 1] / mid;
        if (cost <= hour) {
            res = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return res;
};
