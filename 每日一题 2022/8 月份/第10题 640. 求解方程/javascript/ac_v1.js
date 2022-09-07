/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const isNumber = (str) => {
        return str >= "0" && str <= "9";
    };
    const length = equation.length;
    let num = 0;
    let xFactor = 0;
    let pos = 0;
    let sign = 1;
    let baseSign = 1

    while (pos < length) {
        if (isNumber(equation[pos])) {
            cur = 0;
            while (pos < length && isNumber(equation[pos])) {
                cur = cur * 10 + Number(equation[pos]);
                pos++;
            }
            if (equation[pos] === "x") {
                xFactor += cur * sign * baseSign;
                pos++;
            } else {
                num += cur * sign * baseSign;
            }
        } else if (equation[pos] === "+") {
            sign = 1;
            pos++;
        } else if (equation[pos] === "-") {
            sign = -1;
            pos++;
        } else if (equation[pos] === "x") {
            xFactor += sign * baseSign;
            pos++;
        } else if (equation[pos] === "=") {
            sign = 1;
            baseSign = -1;
            pos++;
        }
    }

    if (xFactor === 0) {
        return num === 0 ? "Infinite solutions" : "No solution";
    } else {
        return `x=${-num / xFactor}`;
    }
};
