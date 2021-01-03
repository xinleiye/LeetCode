/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = [];
    let stack = [];
    
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(") {
            stack.push(command[i]);
        } else if (command[i] === ")") {
            let index = stack.length - 1;

            if (stack[index] === "l") {
                res.push("al");
                stack.pop();
                stack.pop();
                stack.pop();
            } else if (stack[index] === "(") {
                res.push("o");
                stack.pop();
            }
        } else if (command[i] === "G") {
            res.push("G");
        } else {
            stack.push(command[i]);
        }
    }
    
    return res.join("");
};
