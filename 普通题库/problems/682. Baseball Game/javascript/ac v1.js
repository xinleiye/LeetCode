/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let item;
    let sum = 0;
    let scores = [];
    
    for (let i = 0, len = ops.length; i < len; i++) {
        item = ops[i];
        if (!isNaN(item)) {
            scores.push(parseInt(item, 10));
        } else if (item === "C") {
            scores.pop();
        } else if (item === "D") {
            scores.push(scores[scores.length - 1] * 2);
        } else if (item === "+") {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        }
    }
    
    for (let score of scores) {
        sum += score;
    }

    return sum;
};
