/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let numStack = [];
    let dfs = (start, rest) => {
        if (rest < 0) {
            return;
        }
        if (rest === 0) {
            res.push(numStack.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            numStack.push(candidates[i]);
            dfs(i, rest - candidates[i]);
            numStack.pop(candidates[i]);
        }
    };

    dfs(0, target);

    return res;
};
