/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    const length = timeSeries.length;

    for (let i = 0; i < length - 1; i++) {
        const curTime = timeSeries[i];

        if (curTime + duration < timeSeries[i + 1]) {
            res += duration;
        } else {
            res += timeSeries[i + 1] - curTime;
        }
    }

    return res + duration;
};
