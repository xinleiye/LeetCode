/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const maps = new Array(n).fill(0).map(() => []);
    const inDeg = new Array(n).fill(0);
    for (const [s, e] of edges) {
        maps[s].push(e);
        inDeg[e]++;
    }

    const queue = [];
    const ancestor = new Array(n).fill(0).map(() => new Set());
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.length) {
        const s = queue.shift();
        const next = maps[s];
        for (const e of next) {
            ancestor[e].add(s);
            for (const a of ancestor[s]) {
                ancestor[e].add(a);
            }
            inDeg[e]--;
            if (inDeg[e] === 0) {
                queue.push(e);
            }
        }
    }

    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = Array.from(ancestor[i]).sort((a, b) => a - b);
    }

    return res;
};
