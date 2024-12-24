/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function(apples, days) {
    let res = 0;
    const total = apples.length;
    const minQueue = new MinPriorityQueue({
        priority: bid => bid.day
    });
    let time = 0;
    while (time < total) {
        while (!minQueue.isEmpty() && minQueue.front().element.day <= time) {
            minQueue.dequeue();
        }
        if (apples[time] > 0) {
            minQueue.enqueue({
                count: apples[time],
                day: time + days[time]
            });
        }
        if (!minQueue.isEmpty()) {
            let {count, day} = minQueue.dequeue().element;
            if (count > 1) {
                minQueue.enqueue({
                    count: count - 1,
                    day: day
                });
            }
            res++;
        }
        time++;
    }
    while (!minQueue.isEmpty()) {
        while (!minQueue.isEmpty() && minQueue.front().element.day <= time) {
            minQueue.dequeue();
        }
        if (minQueue.isEmpty()) {
            break;
        }

        const {count, day} = minQueue.dequeue().element;
        const num = Math.min(day - time, count);
        res += num;
        time += num;
    }

    return res;
};
