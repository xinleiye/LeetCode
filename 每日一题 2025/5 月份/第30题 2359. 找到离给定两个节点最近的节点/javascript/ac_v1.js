/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const total = edges.length;
    const dis1 = calcDistance(edges, node1);
    const dis2 = calcDistance(edges, node2);
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

function calcDistance(graph, start) {
    const total = graph.length;
    const dis = new Array(total).fill(-1);
    let d = 0;
    let node = start;

    while (node !== -1 && dis[node] === -1) {
        dis[node] = d;
        d++;
        node = graph[node];
    }

    return dis;
}
