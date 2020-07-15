/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let searchTree = (new Array(n + 1)).fill(0);

    searchTree[0] = 1;
    searchTree[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            searchTree[i] += searchTree[j - 1] * searchTree[i - j];
        }
    }

    return searchTree[n];
};
