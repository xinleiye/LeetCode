/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let res = 24 * 60;
    const DAY_MINUTE = 24 * 60
    const total = timePoints.length;
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
