/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let res = 0;
    const total = startTime.length;
    const preSum = new Array(total + 1).fill(0);

    for (let i = 0; i < total; i++) {
        preSum[i + 1] = preSum[i] + endTime[i] - startTime[i];
    }
    for (let i = k - 1; i < total; i++) {
        const right = i === total - 1 ? eventTime : startTime[i + 1];
        const left = i === k - 1 ? 0 : endTime[i - k];

        res = Math.max(res, right - left - (preSum[i + 1] - preSum[i + 1 - k]));
    }

    return res;
};
