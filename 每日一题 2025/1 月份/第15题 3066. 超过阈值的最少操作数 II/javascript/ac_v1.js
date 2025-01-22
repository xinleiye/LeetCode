/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const minQueue = new MinPriorityQueue();
    for (const n of nums) {
        minQueue.enqueue(n);
    }

    let res = 0;
    while (minQueue.front().element < k) {
        const min = minQueue.dequeue().element;
        const max = minQueue.dequeue().element;
        minQueue.enqueue(min * 2 + max);
        res++;
    }

    return res;
};
