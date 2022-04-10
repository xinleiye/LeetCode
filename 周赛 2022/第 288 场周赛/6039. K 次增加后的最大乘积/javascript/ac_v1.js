/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
    let res = 1;
    const MOD = 1e9 + 7;
    const minQueue = new MinPriorityQueue();

    for (const n of nums) {
        minQueue.enqueue(n);
    }
    while (k) {
        let min = minQueue.dequeue().element;

        min++;
        minQueue.enqueue(min);
        k--;
    }
    while (minQueue.size()) {
        res = (res * minQueue.dequeue().element) % MOD;
    }

    return res;
};
