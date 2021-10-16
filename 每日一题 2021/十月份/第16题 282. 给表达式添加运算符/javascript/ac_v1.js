/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const length = num.length;
    const res = [];
    let expr = [];
    const dfsTrack = (exp, curIndex, sum, mul) => {
        if (curIndex === length) {
            if (sum === target) {
                res.push(exp.join(''));
            }
            return;
        }

        const signIndex = exp.length;
        let val = 0;

        if (curIndex > 0) {
            exp.push('');
        }
        // 从 curIndex 开始截取数字
        for (let i = curIndex; i < length; i++) {
            // 截取的数字可以是单个 0, 但不能有前导 0
            if (i !== curIndex && num[curIndex] === '0') {
                break;
            }
            val = val * 10 + parseInt(num[i], 10);
            exp.push(num[i]);
            // 第一个数字前不能添加符号
            if (curIndex > 0) {
                exp[signIndex] = '+';
                dfsTrack(exp, i + 1, sum + val, val);
                exp[signIndex] = '-';
                dfsTrack(exp, i + 1, sum - val, -val);
                exp[signIndex] = '*';
                dfsTrack(exp, i + 1, sum - mul + mul * val, mul * val);
            } else {
                dfsTrack(exp, i + 1, val, val);
            }
        }
        exp.splice(signIndex, exp.length - signIndex);
    };

    dfsTrack(expr, 0, 0, 0);

    return res;
};
