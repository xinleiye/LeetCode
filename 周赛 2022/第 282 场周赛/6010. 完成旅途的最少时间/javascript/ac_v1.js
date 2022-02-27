/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    time.sort((t1, t2) => t1 - t2);

    let left = time[0];
    let right = time[time.length - 1] * totalTrips;
    while (left < right) {
        let curTrips = 0;
        const mid = Math.floor((left + right) / 2);

        for (const t of time) {
            if (t <= mid) {
                curTrips += Math.floor(mid / t);
            }
        }

        if (curTrips < totalTrips) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
