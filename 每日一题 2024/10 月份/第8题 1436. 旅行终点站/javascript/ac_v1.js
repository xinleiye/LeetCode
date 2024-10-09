/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    const maxQueue = new MaxPriorityQueue();
    const total = stations.length;
    let fuel = startFuel;

    for (let i = 0; i < total; i++) {
        while (fuel < stations[i][0]) {
            if (maxQueue.size() <= 0) {
                return -1;
            }
            fuel += maxQueue.dequeue().element;
        }
        maxQueue.enqueue(stations[i][1]);
    }
    while (fuel < target) {
        if (maxQueue.size() <= 0) {
            return -1;
        }
        fuel += maxQueue.dequeue().element;
    }

    return total - maxQueue.size();
};
