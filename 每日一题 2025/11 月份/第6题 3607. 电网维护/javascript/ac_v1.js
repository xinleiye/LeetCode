/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = function(c, connections, queries) {
    const nets = new Map();
    for (const [s, e] of connections) {
        if (!nets.has(s)) {
            nets.set(s, []);
        }
        nets.get(s).push(e);
        if (!nets.has(e)) {
            nets.set(e, []);
        }
        nets.get(e).push(s);
    }

    const visited = new Array(c + 1).fill(false);
    const conn = new Array(c + 1).fill(null);
    for (let i = 1; i <= c; i++) {
        if (!visited[i]) {
            const queue = [i];
            const minQueue = new MinPriorityQueue();

            while (queue.length) {
                const cur = queue.shift();
                const next = nets.get(cur) || [];

                visited[cur] = true;
                conn[cur] = minQueue;
                minQueue.enqueue(cur);
                for (const n of next) {
                    if (!visited[n]) {
                        queue.push(n);
                    }
                }
            }
        }
    }

    const res = [];
    const valid = new Array(c + 1).fill(true);
    for (const [type, node] of queries) {
        if (type === 1) {
            if (valid[node]) {
                res.push(node);
            } else {
                const q = conn[node];

                while (!q.isEmpty() && !valid[q.front()]) {
                    q.dequeue();
                }
                res.push(q.isEmpty() ? -1 : q.front());
            }
        } else {
            valid[node] = false;
        }
    }

    return res;
};
