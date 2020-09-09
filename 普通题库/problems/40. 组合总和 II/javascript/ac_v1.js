/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let numStack = [];
    let numStackSet = new Set();
    let dfs = (start, rest) => {
        if (rest < 0) {
            return;
        }
        if (rest === 0) {
            let flag = numStack.join("#");

            if (!numStackSet.has(flag)) {
                res.push(numStack.slice());
                numStackSet.add(flag);
            }

            return;
        }
        for (let i = start; i < candidates.length; i++) {
            numStack.push(candidates[i]);
            dfs(i + 1, rest - candidates[i]);
            numStack.pop(candidates[i]);
        }
    };

    candidates.sort((val1, val2) => {
        return val1 - val2;
    });
    dfs(0, target);

    return res;
};
