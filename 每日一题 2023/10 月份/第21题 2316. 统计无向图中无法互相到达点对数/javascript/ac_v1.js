/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const edge = new Map();
    const add2Map = (map, p1, p2) => {
        if (map.has(p1)) {
            map.get(p1).push(p2);
        } else {
            map.set(p1, [p2]);
        }
    };
    for (const [s, e] of edges) {
        add2Map(edge, s, e);
        add2Map(edge, e, s);
    }

    const visited = new Array(n).fill(false);
    const bfsSearch = (graph, start, visited) => {
        const stack = [start];
        let count = 0;

        while (stack.length) {
            const node = stack.shift();
            const nexts = graph.get(node);

            count++;
            if (nexts) {
                for (const n of nexts) {
                    if (!visited[n]) {
                        stack.push(n);
                        visited[n] = true;
                    }
                }
            }
        }

        return count;
    };
    const subGraph = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            subGraph.push(bfsSearch(edge, i, visited));
        }
    }

    let res = 0;
    let sum = 0;
    for (const c of subGraph) {
        sum += c;
        res += (n - sum) * c;
    }

    return res;
};
