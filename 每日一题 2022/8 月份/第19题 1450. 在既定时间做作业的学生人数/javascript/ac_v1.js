/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    const total = startTime.length;
    let res = 0;

    for (let i = 0; i < total; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            res++;
        }
    }

    return res;
};
