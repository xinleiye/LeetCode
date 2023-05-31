/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let res = 0;
    const stack = [];

    for (const n of arr) {
        while (stack.length && stack[stack.length - 1] <= n) {
            const top = stack.pop();

            if (!stack.length || stack[stack.length - 1] > n) {
                res += top * n;
            } else {
                res += stack[stack.length - 1] * top;
            }
        }
        stack.push(n);
    }
    while (stack.length >= 2) {
        const top = stack.pop();

        res += top * stack[stack.length - 1];
    }

    return res;
};
