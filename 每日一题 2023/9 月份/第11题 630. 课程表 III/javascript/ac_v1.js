/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    let time = 0;
    const maxQueue = new MaxPriorityQueue();

    courses.sort((c1, c2) => c1[1] - c2[1]);
    for (const [duration, lastDay] of courses) {
        if (time + duration <= lastDay) {
            time += duration;
            maxQueue.enqueue(duration)
        } else if (!maxQueue.isEmpty()) {
            const max = maxQueue.front().element;

            if (max > duration) {
                time -= (max - duration);
                maxQueue.dequeue();
                maxQueue.enqueue(duration);
            }
        }
    }

    return maxQueue.size();
};
