/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
    tasks.sort((t1, t2) => t1[1] - t2[1]);

    let res = 0;
    let times = new Array(tasks[tasks.length - 1][1] + 1).fill(false);
    for (let [s, e, d] of tasks) {
        for (let i = s; i <= e; i++) {
            if (times[i]) {
                d--;
            }
        }
        while (d > 0) {
            if (!times[e]) {
                d--;
                times[e] = true;
                res++;
            }
            e--;
        }
    }

    return res;
};
