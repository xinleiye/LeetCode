/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = 0;
    const queue = [];

    for (const op of operations) {
        if (op === "+") {
            queue.unshift(queue[0] + queue[1]);
        } else if (op === "D") {
            queue.unshift(queue[0] * 2);
        } else if (op === "C") {
            queue.shift();
        } else {
            queue.unshift(Number(op));
        }
    }
    for (const s of queue) {
        res += s;
    }

    return res;
};
