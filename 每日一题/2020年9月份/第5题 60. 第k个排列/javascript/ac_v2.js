/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = "";
    let index = 0;
    let numStack = [];
    let dfs = () => {
        if (res.length > 0) {
            return;
        }
        if (numStack.length === n) {
            index++;
            if (index === k) {
                res = numStack.join("");
            }
            return;
        }
        for (let i = 1; i <= n; i++) {
            if (numStack.indexOf(i) >= 0) {
                continue;
            }
            numStack.push(i);
            dfs();
            numStack.pop(i);
        }
    };

    dfs();

    return res;
};
