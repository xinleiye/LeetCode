/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = new Array(n).fill(0).map(() => new Array(n).fill(false));
    for (const [s, e] of edges) {
        graph[s][e] = true;
        graph[e][s] = true;
    }

    let res = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let stack = [i];
            const nodeSet = new Set();
            let edgeCount = 0;

            visited[i] = true;
            nodeSet.add(i);
            while (stack.length) {
                const cur = stack.shift();
                const nexts = graph[cur];

                for (let j = 0; j < n; j++) {
                    if (!visited[j] && nexts[j]) {
                        nodeSet.add(j);
                        stack.push(j);
                        visited[j] = true;
                    }
                    if (nexts[j]) {
                        edgeCount++;
                    }
                }
            }

            if (nodeSet.size * (nodeSet.size - 1) === edgeCount) {
                res++;
            }
        }
    }

    return res;
};
