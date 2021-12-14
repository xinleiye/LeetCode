/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    let totalTime = 0;
    const maxQueue = new MaxPriorityQueue();

    courses.sort((item1, item2) => {
        return item1[1] - item2[1];
    });
    for (const [time, last] of courses) {
        if (totalTime + time <= last) {
            totalTime += time;
            maxQueue.enqueue(time);
        } else {
            if (!maxQueue.isEmpty()) {
                const max = maxQueue.front().element;

                if (max > time) {
                    totalTime -= (max - time);
                    maxQueue.dequeue();
                    maxQueue.enqueue(time);
                }
            }
        }
    }

    return maxQueue.size();
};
