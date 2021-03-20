/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = [];

    tokens.forEach(item => {
        if (isNaN(item)) {
            let op1 = stack.pop();
            let op2 = stack.pop();

            switch (item) {
                case "+":
                    stack.push(op1 + op2);
                    break;
                case "-":
                    stack.push(op2 - op1);
                    break;
                case "*":
                    stack.push(op1 * op2);
                    break;
                case "/":
                    stack.push(parseInt(op2 / op1, 10));
                    break;
                default:
                    break;
            }
        } else {
            stack.push(parseInt(item, 10));
        }
    });

    return stack[0];
};
