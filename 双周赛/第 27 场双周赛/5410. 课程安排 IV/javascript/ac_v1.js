/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(n, prerequisites, queries) {
    let res = new Array(queries.length).fill(false);
    let prerequisiteMatrix = new Array(n);

    for (let i = 0; i < n; i++) {
        prerequisiteMatrix[i] = new Array(n).fill(false);
    }

    prerequisites.forEach(item => {
        prerequisiteMatrix[item[0]][item[1]] = true;
    });

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                prerequisiteMatrix[i][j] = prerequisiteMatrix[i][j] || prerequisiteMatrix[i][k] && prerequisiteMatrix[k][j];
            }
        }
    }

    queries.forEach((item, index) => {
        res[index] = prerequisiteMatrix[item[0]][item[1]];
    });

    return res;
};
