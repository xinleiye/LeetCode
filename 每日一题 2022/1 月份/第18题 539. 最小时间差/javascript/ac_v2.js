/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const total = timePoints.length;
    const DAY_MINUTE = 24 * 60;

    if (total >= DAY_MINUTE) {
        return 0;
    }

    let res = DAY_MINUTE;
    const timeToMinute = (str) => {
        const time = str.split(":").map(item => Number(item));

        return time[0] * 60 + time[1];
    }
    const minutesPoint = timePoints.map(item => timeToMinute(item)).sort((t1, t2) => t1 - t2);
    let diff = 0;

    for (let i = 1; i < total; i++) {
        diff = minutesPoint[i] - minutesPoint[i - 1];
        res = Math.min(res, diff, DAY_MINUTE - diff);
    }
    diff = minutesPoint[total - 1] - minutesPoint[0];
    res = Math.min(res, diff, DAY_MINUTE - diff);

    return res;
};
