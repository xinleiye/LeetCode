/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let maxDay = 0;
    for (const [s, e] of events) {
        maxDay = Math.max(maxDay, e);
    }
    events.sort((e1, e2) => e1[0] - e2[0]);

    let res = 0;
    let minQueue = new MinPriorityQueue();
    let index = 0;
    const total = events.length;
    for (let i = 1; i <= maxDay; i++) {
        while (index < total && events[index][0] <= i) {
            minQueue.enqueue(events[index][1]);
            index++;
        }
        while (!minQueue.isEmpty() && minQueue.front() < i) {
            minQueue.dequeue();
        }
        if (!minQueue.isEmpty()) {
            res++;
            minQueue.dequeue();
        }
    }

    return res;
};
