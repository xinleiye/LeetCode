/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    const total = nums.length;
    const maxQueue = new MaxPriorityQueue();
    const deltaArr = new Array(nums.length + 1).fill(0);
    let operations = 0;
    let qIndex = 0;
    const qTotal = queries.length;

    queries.sort((q1, q2) => q1[0] - q2[0]);
    for (let i = 0; i < total; i++) {
        operations += deltaArr[i];
        while (qIndex < qTotal && queries[qIndex][0] === i) {
            maxQueue.enqueue(queries[qIndex][1]);
            qIndex++;
        }
        while (operations < nums[i] && !maxQueue.isEmpty() && maxQueue.front() >= i) {
            operations += 1;
            deltaArr[maxQueue.dequeue() + 1] -= 1;
        }
        if (operations < nums[i]) {
            return -1;
        }
    }

    return maxQueue.size();
};
