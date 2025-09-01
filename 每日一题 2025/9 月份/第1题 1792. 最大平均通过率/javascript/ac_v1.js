/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    let res = 0;
    const queue = new PriorityQueue((e1, e2) => {
        const f1 = (e1.total - e1.pass) * (e2.total + 1) * e2.total;
        const f2 = (e2.total - e2.pass) * (e1.total + 1) * e1.total;

        return f1 > f2 ? -1 : 1;
    });

    for (const [pass, total] of classes) {
        queue.enqueue({ pass, total });
    }
    for (let i = 1; i <= extraStudents; i++) {
        const { pass, total } = queue.dequeue();

        queue.enqueue({ pass: pass + 1, total: total + 1});
    }
    while (!queue.isEmpty()) {
        const { pass, total } = queue.dequeue();

        res += pass / total;
    }

    return res / classes.length;
};
