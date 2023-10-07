/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const courseMap = new Array(numCourses).fill(0).map(() => []);
    for (const [s, e] of prerequisites) {
        courseMap[s].push(e);
    }

    const visited = new Array(numCourses).fill(0);
    const res = new Array(numCourses);
    let hasCircle = false;
    let index = 0;
    const dfsSearch = (node) => {
        visited[node] = 1;

        const next = courseMap[node];
        for (const n of next) {
            if (visited[n] === 0) {
                dfsSearch(n);
                if (hasCircle) {
                    return;
                }
            } else if (visited[n] === 1) {
                hasCircle = true;
                return;
            }
        }
        visited[node] = 2;
        res[index] = node;
        index++;
    };
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) {
            dfsSearch(i);
        }
        if (hasCircle) {
            return [];
        }
    }

    return res;
};
