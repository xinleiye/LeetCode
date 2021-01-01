/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let res = true;
    let visited = new Array(numCourses).fill(0);
    let edgeMap = new Map();
    let dfs = (node) => {
        let nodes;

        visited[node] = 1;
        if (edgeMap.has(node)) {
            nodes = edgeMap.get(node)
            for (let i = 0; i < nodes.length; i++) {
                if (visited[nodes[i]] === 0) {
                    dfs(nodes[i]);
                    if (res === false) {
                        break;
                    }
                } else if (visited[nodes[i]] === 1) {
                    res = false;
                    break;
                }
            }
        }
        visited[node] = 2;
    };

    prerequisites.forEach(item => {
        if (edgeMap.has(item[0])) {
            edgeMap.get(item[0]).push(item[1]);
        } else {
            edgeMap.set(item[0], [item[1]]);
        }
    });

    for (let i = 0; i < numCourses; i++) {
        if (res === true) {
            if (visited[i] === 0) {
                dfs(i);
            }
        } else {
            break;
        }
    }

    return res;
};