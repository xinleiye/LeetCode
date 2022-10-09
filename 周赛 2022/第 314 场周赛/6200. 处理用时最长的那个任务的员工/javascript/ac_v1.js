/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let res = -1;
    let maxTime = 0;
    let curTime = 0;

    for (const [id, leaveTime] of logs) {
        const time = leaveTime - curTime;

        if (time > maxTime) {
            maxTime = time;
            res = id;
        } else if (time === maxTime && id < res) {
            res = id;
        }
        curTime = leaveTime;
    }

    return res;
};
