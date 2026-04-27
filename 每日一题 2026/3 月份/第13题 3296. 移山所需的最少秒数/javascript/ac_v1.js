/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    const totalWorker = workerTimes.length
    const minQueue = new MinPriorityQueue((bid) => {
        return calcTime(bid.time, bid.work);
    });
    let res = 0;

    for (let i = 0; i < totalWorker; i++) {
        minQueue.enqueue({
            time: workerTimes[i],
            work: 1
        });
    }
    for (let i = 1; i <= mountainHeight; i++) {
        const min = minQueue.dequeue();
        const time = calcTime(min.time, min.work);

        res = time;
        minQueue.enqueue({
            time: min.time,
            work: min.work + 1
        });
    }

    return res;
};

function calcTime(time, work) {
    return time * ((1 + work) * work / 2);
}
