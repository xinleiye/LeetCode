/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const res = new Array(n).fill(0);
    const stack = [];
    const parseLog = (log) => {
        const arr = log.split(":");

        return [arr[0], arr[1], Number(arr[2])];
    };

    for (const log of logs) {
        const cur = parseLog(log);

        if (cur[1] === "start") {
            if (stack.length) {
                const top = stack[stack.length - 1];

                res[top[0]] += cur[2] - top[2];
            }
            stack.push(cur);
        } else {
            const top = stack.pop();

            res[cur[0]] += cur[2] - top[2] + 1;
            if (stack.length) {
                stack[stack.length - 1][2] = cur[2] + 1;
            }
        }
    }

    return res;
};
