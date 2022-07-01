/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const expArr = [];
    let cur = 0;
    for (const ch of expression) {
        if (isNaN(ch)) {
            expArr.push(cur);
            expArr.push(ch);
            cur = 0;
        } else {
            cur = cur * 10 + Number(ch);
        }
    }
    expArr.push(cur);

    const expLen = expArr.length;
    const dp = new Array(expLen).fill(0).map(() => new Array(expLen));
    for (let i = 0; i < expLen; i++) {
        for (let j = 0; j < expLen; j++) {
            dp[i][j] = [];
        }
    }

    const dfs = (exp, left, right, cache) => {
        if (cache[left][right].length) {
            return cache[left][right];
        }
        if (left === right) {
            cache[left][right].push(exp[left]);
            return cache[left][right];
        }
        for (let i = left; i < right; i += 2) {
            let leftVal = dfs(exp, left, i, cache);
            let rightVal = dfs(exp, i + 2, right, cache);
            const op = exp[i + 1];
            for (const lv of leftVal) {
                for (const rv of rightVal) {
                    if (op === "*") {
                        cache[left][right].push(lv * rv);
                    } else if (op === "+") {
                        cache[left][right].push(lv + rv);
                    } else if (op === "-") {
                        cache[left][right].push(lv - rv);
                    }
                }
            }
        }

        return cache[left][right];
    };
    
    return dfs(expArr, 0, expLen - 1, dp);
};
