/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = "";
    let index = 0;
    let numSet = new Set();
    let dfs = (preStr, deep) => {
        let currentStr;

        if (res.length > 0) {
            return;
        }
        if (deep === n) {
            index++;
            if (index === k) {
                res = preStr;
            }
            return;
        }
        for (let i = 1; i <= n; i++) {
            if (numSet.has(i)) {
                continue;
            }
            numSet.add(i);
            currentStr = preStr + i;
            dfs(currentStr, deep + 1);
            numSet.delete(i);
        }
    };

    dfs("", 0);

    return res;
};
