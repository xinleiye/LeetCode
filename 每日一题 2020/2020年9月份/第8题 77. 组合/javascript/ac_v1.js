/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let numStack = [];
    let dfs = (start) => {
        if (numStack.length === k) {
            res.push(numStack.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            numStack.push(i);
            dfs(i + 1);
            numStack.pop();
        }
    };

    dfs(1);

    return res;
};
