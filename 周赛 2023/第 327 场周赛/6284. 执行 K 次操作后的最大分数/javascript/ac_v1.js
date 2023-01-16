/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let res = 0;
    const maxQueue = new MaxPriorityQueue();

    for (const n of nums) {
        maxQueue.enqueue(n);
    }
    for (let i = 0; i < k; i++) {
        const cur = maxQueue.dequeue().element;

        res += cur;
        maxQueue.enqueue(Math.ceil(cur / 3));
    }

    return res;
};
