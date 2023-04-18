/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    const map = new Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

    for (const [s, e, w] of edges) {
        map[s][e] = w;
    }
    this.map = map;
    this.total = n;
};


/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    this.map[edge[0]][edge[1]] = edge[2];
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    const MAX = Number.MAX_SAFE_INTEGER
    const dis = new Array(this.total).fill(MAX);
    const visited = new Array(this.total).fill(false);

    dis[node1] = 0;
    while (true) {
        let curNode = -1;

        for (let i = 0; i < this.total; i++) {
            if (!visited[i] && (curNode === -1 || dis[i] < dis[curNode])) {
                curNode = i;
            }
        }
        if (curNode === -1  || dis[curNode] === MAX) {
            return -1;
        }
        if (curNode === node2) {
            return dis[node2];
        }
        visited[curNode] = true;
        for (let i = 0; i < this.total; i++) {
            dis[i] = Math.min(dis[i], dis[curNode] + this.map[curNode][i]);
        }
    }
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
