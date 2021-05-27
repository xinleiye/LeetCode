/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [];
    const length = s.length;

    for (let i = 0; i < length; i++) {
        if (s[i] === ")") {
            const tmpStack = [];

            while (stack.length && stack[stack.length - 1] !== "(") {
                tmpStack.push(stack.pop());
            }
            stack.pop();
            while (tmpStack.length) {
                stack.push(tmpStack.shift());
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};
