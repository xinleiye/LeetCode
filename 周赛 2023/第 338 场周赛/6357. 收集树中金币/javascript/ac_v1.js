/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function(coins, edges) {
    const total = coins.length;
    const degree = new Array(total).fill(0);
    const edgeMap = new Map();
    for (const [s, e] of edges) {
        if (edgeMap.has(s)) {
            edgeMap.get(s).push(e);
        } else {
            edgeMap.set(s, [e]);
        }
        if (edgeMap.has(e)) {
            edgeMap.get(e).push(s);
        } else {
            edgeMap.set(e, [s]);
        }
        degree[s]++;
        degree[e]++;
    }

    const queue = [];
    for (let i = 0; i < total; i++) {
        if (degree[i] === 1 && coins[i] === 0) {
            queue.push(i);
        }
    }
    // 删除无金币叶子节点，剩余的叶子节点都是有金币的
    while (queue.length) {
        const cur = queue.shift();
        const next = edgeMap.get(cur);

        for (const n of next) {
            degree[n]--;
            if (degree[n] === 1 && coins[n] === 0) {
                queue.push(n);
            }
        }
    }

    // 收集有金币叶子节点
    for (let i = 0; i < total; i++) {
        if (degree[i] === 1 && coins[i] === 1) {
            queue.push(i);
        }
    }
    // 有金币叶子节点最多一个，可以直接收集
    if (queue.length <= 1) {
        return 0;
    }

    // 删除有金币叶子节点（收集金币），同时删除无金币叶子节点
    const times = new Array(total).fill(0);
    while (queue.length) {
        const cur = queue.shift();
        const next = edgeMap.get(cur);

        for (const n of next) {
            degree[n]--;
            if (degree[n] === 1) {
                times[n] = times[cur] + 1;
                queue.push(n);
            }
        }
    }

    let res = 0;
    for (const [s, e] of edges) {
        if (times[s] >= 2 && times[e] >= 2) {
            res += 2;
        }
    }

    return res;
};
