/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let res = 0;
    const stack = [];

    for (const c of s) {
        if (c === '(') {
            stack.push(c);
        } else {
            if (stack.length) {
                stack.pop();
            } else {
                res++;
            }
        }
    }
    res += stack.length;

    return res;
};
