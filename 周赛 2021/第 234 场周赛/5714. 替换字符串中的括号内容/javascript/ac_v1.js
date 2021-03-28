/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
    const stack = [];
    const keyValMap = new Map();
    let right = "";

    knowledge.forEach(item => {
        keyValMap.set(item[0], item[1]);
    });

    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] >= "a" && s[i] <= "z") {
            if (right === "(") {
                stack.push(stack.pop() + s[i]);
            } else {
                stack.push(s[i]);
            }
        } else if (s[i] === "(") {
            stack.push("(");
            stack.push("");
            right = "(";
        } else if (s[i] === ")") {
            stack.push(")");
            right = "";
        }
    }

    for (let i = 1, len = stack.length - 1; i < len; i++) {
        if (stack[i - 1] === "(" && stack[i + 1] === ")") {
            stack[i] = keyValMap.has(stack[i]) ? keyValMap.get(stack[i]) : "?";
        }
    }

    return stack.filter(val => {
        return val !== "(" && val !== ")";
    }).join("");
};
