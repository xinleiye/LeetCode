/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const taskMap = new Map();
    for (const t of tasks) {
        if (taskMap.has(t)) {
            taskMap.set(t, taskMap.get(t) + 1);
        } else {
            taskMap.set(t, 1);
        }
    }

    const taskArr = Array.from(taskMap);
    let res = 0;
    for (const [_, count] of taskArr) {
        if (count === 1) {
            return -1;
        } else {
            if ((count % 3) === 0) {
                res += count / 3;
            } else {
                res += 1 + Math.floor(count / 3);
            }
        }
    }

    return res;
};
