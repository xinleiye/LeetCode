/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const total = startTime.length;
    const jobs = new Array(total);
    const dp = new Array(total + 1).fill(0);

    for (let i = 0; i < total; i++) {
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }
    jobs.sort((j1, j2) => {
        return j1[1] - j2[1];
    });
    for (let i = 1; i <= total; i++) {
        const preIndex = binarySearch(jobs, 0, i - 1, jobs[i - 1][0]);

        dp[i] = Math.max(dp[i - 1], dp[preIndex] + jobs[i - 1][2]);
    }

    return dp[total];
};

function binarySearch(arr, left, right, target) {
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid][1] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
