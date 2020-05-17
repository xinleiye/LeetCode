/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let res = new Array(numCourses);
    let courseMap = new Map();
    let visited = new Array(numCourses).fill(0);
    let finishTime = new Array(numCourses).fill(0);
    let time = 0;
    let isCircle = false;
    let dfsVisit = (pre, n) => {
        visited[n] = 1;
        time = time + 1;
        pre.push(n);
        if (courseMap.has(n)) {
            courseMap.get(n).forEach(item => {
                if (pre.indexOf(item) >= 0) {
                    isCircle = true;
                }
                if (!isCircle && visited[item] === 0) {
                    dfsVisit(pre, item);
                }
            });
        }
        pre.pop(n);
        time = time + 1;
        finishTime[n] = time;
    };

    prerequisites.forEach(item => {
        if (courseMap.has(item[0])) {
            courseMap.get(item[0]).push(item[1]);
        } else {
            courseMap.set(item[0], [item[1]]);
        }
    });

    courseMap.forEach((val, key) => {
        if (visited[key] === 0) {
            dfsVisit([], key);
        }
    });

    if (isCircle) {
        return [];
    } else {
        for (let i = 0; i < numCourses; i++) {
            res[i] = i;
        }
        res.sort((val1, val2) => {
            return finishTime[val1] - finishTime[val2];
        });
        return res;
    }
};
