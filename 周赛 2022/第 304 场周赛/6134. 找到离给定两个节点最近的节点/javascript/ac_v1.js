/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const total = edges.length;
    const edgeMap = new Map();
    for (let i = 0; i < total; i++) {
        if (edges[i] !== -1) {
            edgeMap.set(i, edges[i]);
        }
    }

    const dis1 = new Array(total).fill(-1);
    const dis2 = new Array(total).fill(-1);
    const bfsSearch = (start, distance) => {
        let stack = [start];
        const visited = new Array(total).fill(false);
        let length = 0;
        
        while (stack.length) {
            const newStack = [];

            for (const s of stack) {
                distance[s] = length;
            }
            for (const s of stack) {
                visited[s] = true;
                if (edgeMap.has(s)) {
                    const d = edgeMap.get(s);
                    
                    if (!visited[d]) {
                        newStack.push(d);
                    }
                }
            }
            length++;
            stack = newStack;
        }
    };
    bfsSearch(node1, dis1);
    bfsSearch(node2, dis2);
    
    let res = -1;
    let dis = total;
    for (let i = 0; i < total; i++) {
        if (dis1[i] !== -1 && dis2[i] !== -1) {
            const max = Math.max(dis1[i], dis2[i]);

            if (max < dis) {
                dis = max;
                res = i;
            }
        }
    }

    return res;
};
