/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    if (start === end) {
        return 0;
    }

    const validSet = new Set();
    for (const b of bank) {
        validSet.add(b);
    }
    if (!validSet.has(end)) {
        return -1;
    }

    const visitedSet = new Set();
    const queue = [start];
    const keys = ["A", "C", "T", "G"];
    let step = 1;
    visitedSet.add(start);
    while (queue.length) {
        const count = queue.length;
        for (let i = 0; i < count; i++) {
            const cur = queue.shift();
            for (let j = 0; j < 8; j++) {
                for (let k = 0; k < 4; k++) {
                    if (keys[k] !== cur[j]) {
                        const next = cur.substr(0, j) + keys[k] + cur.substr(j + 1);
                        if (validSet.has(next) && !visitedSet.has(next)) {
                            if (next === end) {
                                return step;
                            }
                            queue.push(next);
                            visitedSet.add(next);
                        }
                    }
                }
            }
        }
        step++;
    }

    return -1;
};
