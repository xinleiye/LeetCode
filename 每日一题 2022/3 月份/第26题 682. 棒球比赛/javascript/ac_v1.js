/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = 0;
    const scoreBuff = [];

    for (const op of ops) {
        const length = scoreBuff.length;
        switch(op) { 
            case "+":
                scoreBuff.push(scoreBuff[length - 1] + scoreBuff[length - 2]);
                break;
            case "D":
                scoreBuff.push(scoreBuff[length - 1] * 2);
                break;
            case "C":
                scoreBuff.pop();
                break;
            default:
                scoreBuff.push(Number(op));
                break;
        }
    }
    for (const s of scoreBuff) {
        res += s;
    }

    return res;
};
