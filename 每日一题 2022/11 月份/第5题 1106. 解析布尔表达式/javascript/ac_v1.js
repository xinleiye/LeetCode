/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stack = [];
    const length = expression.length;

    for (let i = 0; i < length; i++) {
        const ch = expression[i];

        if (ch === ")") {
            let tCount = 0;
            let fCount = 0;
            while (stack[stack.length - 1] !== "(") {
                if (stack.pop() === "t") {
                    tCount++;
                } else {
                    fCount++;
                }
            }
            // 弹出 (
            stack.pop();

            const op = stack.pop();
            switch (op) {
                case "!":
                    if (tCount) {
                        stack.push("f");
                    } else {
                        stack.push("t");
                    }
                    break;
                case "&":
                    if (fCount) {
                        stack.push("f");
                    } else {
                        stack.push("t");
                    }
                    break;
                case "|":
                    if (tCount) {
                        stack.push("t");
                    } else {
                        stack.push("f");
                    }
                    break;
                default:
                    break;
            }
        } else if (ch !== ",") {
            stack.push(ch);
        }
    }

    return stack[0] === "t" ? true : false;
};
