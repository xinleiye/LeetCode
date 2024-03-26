/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    const costMap = new Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));
    const edgeMap = new Map();

    for (const [s, e, w] of edges) {
        costMap[s][e] = w;
        if (edgeMap.has(s)) {
            edgeMap.get(s).push(e);
        } else {
            edgeMap.set(s, [e]);
        }
    }
    this.costMap = costMap;
    this.edgeMap = edgeMap;
    this.total = n;
};


/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function([s, e, w]) {
    this.costMap[s][e] = w;
    if (this.edgeMap.has(s)) {
        this.edgeMap.get(s).push(e);
    } else {
        this.edgeMap.set(s, [e]);
    }
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
Graph.prototype.shortestPath = function(start, end) {
    const MAX = Number.MAX_SAFE_INTEGER
    const dis = new Array(this.total).fill(MAX);
    const visited = new Array(this.total).fill(false);
    const minQueue = new MinPriorityQueue({ priority: (bid) => bid.cost });
    const costMap = this.costMap;

    dis[start] = 0;
    minQueue.enqueue({ node: start, cost: 0 });
    while (minQueue.size()) {
        let { node, cost } = minQueue.dequeue().element;

        if (visited[node]) {
            continue;
        }
        visited[node] = true;
        for (const n of this.edgeMap.get(node) || []) {
            if (dis[n] > costMap[node][n] + cost) {
                dis[n] = costMap[node][n] + cost;
                minQueue.enqueue({ node: n, cost: dis[n] });
            }
        }
    }

    return dis[end] === MAX ? -1 : dis[end];
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
