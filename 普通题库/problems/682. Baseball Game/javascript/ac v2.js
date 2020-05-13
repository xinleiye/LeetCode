/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let scores = [];
    
    ops.forEach((score) => {
        if (!isNaN(score)) {
            scores.push(parseInt(score, 10));
        } else if (score === "C") {
            scores.pop();
        } else if (score === "D") {
            scores.push(scores[scores.length - 1] * 2);
        } else if (score === "+") {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        }
    });

    return scores.reduce((score, sum) => {
        sum += score;
        return sum;
    });
};
