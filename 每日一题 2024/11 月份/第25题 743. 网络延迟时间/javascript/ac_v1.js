/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const map = new Map();
    for (const [s, e, w] of times) {
        if (map.has(s)) {
            map.get(s).push([e, w]);
        } else {
            map.set(s, [[e, w]]);
        }
    }

    const dis = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let queue = [[k, 0]];
    dis[k] = 0;
    while (queue.length) {
        const [pn, pw] = queue.pop();
        if (pw > dis[pn]) {
            continue;
        }

        const nexts = map.get(pn) || [];
        for (const [n, w] of nexts) {
            const newDis = w + pw;
            if (newDis < dis[n]) {
                dis[n] = newDis;
                queue.push([n, newDis]);
            }
        }
    }

    let res = -1;
    for (let i = 1; i <= n; i++) {
        if (dis[i] === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        res = Math.max(res, dis[i]);
    }

    return res;
};
