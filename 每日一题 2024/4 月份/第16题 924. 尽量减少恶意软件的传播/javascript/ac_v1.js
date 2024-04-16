/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function(graph, initial) {
    const total = graph.length;
    const subGraph = new Array(total).fill(0);
    const subSize = {};
    let id = 0;
    for (let i = 0; i < total; i++) {
        if (subGraph[i] === 0) {
            let size = 1;
            const queue = [];
            id++;
            queue.push(i);
            subGraph[i] = id;
            while (queue.length) {
                const cur = queue.shift();
                for (let j = 0; j < total; j++) {
                    if (subGraph[j] === 0 && graph[cur][j] === 1) {
                        size++;
                        queue.push(j);
                        subGraph[j] = id;
                    }
                }
            }
            subSize[id] = size;
        }
    }

    const subGraphInitial = new Array(id + 1).fill(0);
    for (const n of initial) {
        subGraphInitial[subGraph[n]]++;
    }

    let res = total + 1;
    let maxRemoved = 0;
    for (const n of initial) {
        const removed = subGraphInitial[subGraph[n]] === 1 ? subSize[subGraph[n]] : 0;
        if (removed > maxRemoved || (removed === maxRemoved && n < res)) {
            res = n;
            maxRemoved = removed;
        }
    }

    return res;
};
