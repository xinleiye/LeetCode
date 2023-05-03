/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const ch of s) {
        if (ch === "c") {
            const len = stack.length;

            if (len >= 2 && stack[len - 1] === "b" && stack[len - 2] === "a") {
                stack.pop();
                stack.pop();
            } else {
                stack.push(ch);
            }
        } else {
            stack.push(ch);
        }
    }

    return stack.length === 0;
};
