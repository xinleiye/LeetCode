/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const graph = new Map();
    for (const [s, t] of edges) {
        if (graph.has(s)) {
            graph.get(s).push(t);
        } else {
            graph.set(s, [t]);
        }
        if (graph.has(t)) {
            graph.get(t).push(s);
        } else {
            graph.set(t, [s]);
        }
    }

    const total = amount.length;
    const bobTime = new Array(total).fill(total);
    const dfsBob = (cur, parent, time) => {
        if (cur === 0) {
            bobTime[0] = time;
            return true;
        }

        let got = false;
        for (const next of graph.get(cur)) {
            if (next !== parent) {
                if (dfsBob(next, cur, time + 1)) {
                    got = true;
                }
            }
        }
        if (got) {
            bobTime[cur] = time;
        }

        return got;
    };
    dfsBob(bob, -1, 0);

    let res = Number.MIN_SAFE_INTEGER;
    const dfsAlice = (cur, parent, time, score) => {
        if (time < bobTime[cur]) {
            score += amount[cur];
        } else if (time === bobTime[cur]) {
            score += amount[cur] / 2;
        }

        const next = graph.get(cur);
        if (next.length === 1) {
            res = Math.max(res, score);
            return;
        }
        for (const n of next) {
            if (n !== parent) {
                dfsAlice(n, cur, time + 1, score);
            }
        }
    };
    graph.get(0).push(-1);
    dfsAlice(0, -1, 0, 0);

    return res;
};
