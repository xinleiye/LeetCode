/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxQueue = new MaxPriorityQueue();
    let res = 0;

    for (const val of gifts) {
        res += val;
        maxQueue.enqueue(val);
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
