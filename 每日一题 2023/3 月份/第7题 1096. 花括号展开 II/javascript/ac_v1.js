/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let index = 0;
    const total = expression.length;
    const expStack = [];
    const opStack = [];
    const opExp = (exp1, exp2, op) => {
        let resExp = [];

        if (op === "+") {
            resExp.push(...exp1, ...exp2);
        } else {
            for (const e1 of exp1) {
                for (const e2 of exp2) {
                    resExp.push(e1 + e2);
                }
            }
        }

        return resExp;
    };

    while (index < total) {
        const ch = expression[index];

        if (ch === "}") {
            while (opStack.length && opStack[opStack.length - 1] !== "{") {
                const exp2 = expStack.pop();
                const exp1 = expStack.pop();

                expStack.push(opExp(exp1, exp2, opStack.pop()));
            }
            opStack.pop();
        } else if (ch === "{") {
            const preCh = index > 0 ? expression[index - 1] : "";

            if (preCh === "}" || (preCh >= "a" && preCh <= "z")) {
                opStack.push("*");
            }
            opStack.push(ch);
        } else if (ch === ","){
            while (opStack.length && opStack[opStack.length - 1] === "*") {
                const exp2 = expStack.pop();
                const exp1 = expStack.pop();

                expStack.push(opExp(exp1, exp2, opStack.pop()));
            }
            opStack.push("+");
        } else {
            const preCh = index > 0 ? expression[index - 1] : "";

            if (preCh === "}" || (preCh >= "a" && preCh <= "z")) {
                opStack.push("*");
            }
            expStack.push([ch]);
        }
        index++;
    }
    while (opStack.length) {
        const exp2 = expStack.pop();
        const exp1 = expStack.pop();

        expStack.push(opExp(exp1, exp2, opStack.pop()));
    }

    return new Array(...new Set(...expStack)).sort();
};
