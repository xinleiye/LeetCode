/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const edgeMap = new Array(numCourses).fill(0).map(() => new Array());
    for (const [s, e] of prerequisites) {
        edgeMap[s].push(e);
    }

    let flag = true;
    const visited = new Array(numCourses).fill(0);
    const dfsSearch = (course) => {
        const dep = edgeMap[course];

        visited[course] = 1;
        for (const next of dep) {
            if (visited[next] === 0) {
                dfsSearch(next);
                if (!flag) {
                    return;
                }
            } else if (visited[next] === 1) {
                flag = false;
                return;
            }
        }
        visited[course] = 2;
    };

    for (let i = 0; i < numCourses; i++) {
        if (flag) {
            if (visited[i] === 0) {
                dfsSearch(i);
            }
        } else {
            return false;
        }
    }

    return true;
};
