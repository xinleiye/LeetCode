/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0;
    let stack = [];

    if (s.length <= 1) {
        return 0;
    }
    stack.push(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === "L") {
            if (stack.length && stack[stack.length - 1] === "R") {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            if (stack.length && stack[stack.length - 1] === "L") {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        if (stack.length === 0) {
            res++;
        }
    }

    return res;
};
