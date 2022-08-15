/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    let time = 0;
    const doneMap = new Map();
    const total = tasks.length;
    let index = 0;

    while (index < total) {
        const cur = tasks[index];
        const pre = doneMap.get(cur);

        if (pre) {
            if (time - pre >= space) {
                time++
            } else {
                time += space - (time - pre) + 1;
            }
        } else {
            time++;
        }

        doneMap.set(cur, time);
        index++;
    }
    
    return time;
};
