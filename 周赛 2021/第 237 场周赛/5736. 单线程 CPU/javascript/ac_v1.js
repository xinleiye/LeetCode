/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
 var getOrder = function(tasks) {
    const res = [];
    const taskQueue = [];
    const tasksIndex = new Array(tasks.length);
    const length = tasks.length;
    let timeLine = 0;
    let taskIndex = 0;

    for (let i = 0; i < length; i++) {
        tasksIndex[i] = i;
    }

    tasksIndex.sort((index1, index2) => {
        const t1 = tasks[index1];
        const t2 = tasks[index2];

        if (t1[0] !== t2[0]) {
            return t1[0] - t2[0];
        } else {
            return t1[1] - t2[1];
        }
    });

    timeLine = tasks[tasksIndex[0]][0];
    while (taskIndex < length) {
        let task;

        while (taskIndex < length && tasks[tasksIndex[taskIndex]][0] <= timeLine) {
            taskQueue.push(tasksIndex[taskIndex]);
            taskIndex++;
        }
        taskQueue.sort((index1, index2) => {
            const t1 = tasks[index1];
            const t2 = tasks[index2];

            if (t1[1] !== t2[1]) {
                return t1[1] - t2[1];
            } else {
                return index1 - index2;
            }
        });
        if (taskQueue.length) {
            let currentIndex = taskQueue.shift();
    
            task = tasks[currentIndex];
            timeLine += task[1];
            res.push(currentIndex);
        } else {
            taskQueue.push(tasksIndex[taskIndex]);
            task = tasks[taskQueue[0]];
            timeLine = task[0];
            taskIndex++;
        }
    }

    while (taskQueue.length) {
        res.push(taskQueue.shift());
    }

    return res;
};
