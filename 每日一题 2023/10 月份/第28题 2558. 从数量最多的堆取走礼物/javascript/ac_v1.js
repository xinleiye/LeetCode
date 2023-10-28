/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let res = 0;
    const maxQueue = new MaxPriorityQueue();

    for (const v of gifts) {
        res += v;
        maxQueue.enqueue(v);
    }
    while (k) {
        const max = maxQueue.dequeue().element;
        const rest = Math.floor(Math.sqrt(max));

        res -= (max - rest);
        maxQueue.enqueue(rest);
        k--;
    }

    return res;
};
