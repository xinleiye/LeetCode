/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    const stack = [];

    for (const p of prices) {
        if (stack.length === 0 || p >= stack[stack.length - 1]) {
            stack.push(p);
        } else {
            res += stack.length ? stack[stack.length - 1] - stack[0] : 0;
            stack.length = 0;
            stack.push(p);
        }
    }
    if (stack.length) {
        res += stack[stack.length - 1] - stack[0];
    }

    return res;
};
