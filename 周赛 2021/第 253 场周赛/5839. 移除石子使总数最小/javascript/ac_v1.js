/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let res = 0;
    let index = 0;
    const maxQueue = new MaxPriorityQueue();

    for (let item of piles) {
        maxQueue.enqueue(item);
        res += item;
    }
    while (!maxQueue.isEmpty() && index < k) {
        const maxPile = maxQueue.dequeue().element;
        const removePile = Math.floor(maxPile / 2);

        res -= removePile;
        maxQueue.enqueue(maxPile - removePile);
        index++;
    }

    return res;
};
