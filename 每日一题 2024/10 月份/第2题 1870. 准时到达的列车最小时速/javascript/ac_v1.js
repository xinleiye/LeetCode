/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let left = 1;
    let right = Math.max(...dist);
    let res = 1;
    const total = dist.length;

    right *= 100;
    if ((total - 1 + dist[total - 1] / right) > hour) {
        return -1;
    }
    while (left <= right) {
        const mid = (left + right) >>> 1;
        let time = 0;

        for (let i = 0; i < total - 1; i++) {
            time += Math.ceil(dist[i] / mid);
        }
        time += dist[total - 1] / mid;
        if (time <= hour) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
