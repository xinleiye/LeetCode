/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];

    logs.forEach(op => {
        if (op === "../") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (op === "./") {
            // Do nothing
        } else {
            stack.push(op);
        }
    });

    return stack.length;
};
