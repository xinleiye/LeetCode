/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let numStack = [];
    let dfs = (start, target) => {
        for (let i = start; i <= 9; i++) {
            if (target - i < 0) {
                break;
            } else if (target - i === 0) {
                numStack.push(i);
                if (numStack.length === k) {
                    res.push(numStack.slice());
                }
                numStack.pop();
                break;
            } else {
                numStack.push(i);
                dfs(i + 1, target - i);
                numStack.pop();
            }
        }
    }

    dfs(1, n);

    return res;
};
