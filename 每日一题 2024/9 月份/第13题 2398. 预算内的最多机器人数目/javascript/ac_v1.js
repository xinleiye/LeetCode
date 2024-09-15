/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    const total = chargeTimes.length;
    const queue = [];
    let res = 0;
    let left = 0;
    let right = 0;
    let totalCost = 0;

    while (right < total) {
        totalCost += runningCosts[right];
        while (queue.length && chargeTimes[queue[queue.length - 1]] <= chargeTimes[right]) {
            queue.pop();
        }
        queue.push(right);
        while (left <= right && (right - left + 1) * totalCost + chargeTimes[queue[0]] > budget) {
            if (queue.length && queue[0] === left) {
                queue.shift();
            }
            totalCost -= runningCosts[left];
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
    }

    return res;
};
