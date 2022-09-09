/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const dirs = [];

    for (const d of logs) {
        if (d[0] === "." && d[1] === ".") {
            if (dirs.length > 0) {
                dirs.pop();
            }
        } else if (d[0] === "." && d[1] === "/") {
            // do nothing
        } else {
            dirs.push(d);
        }
    }

    return dirs.length;
};
