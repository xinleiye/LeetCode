/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;
    let min = 1e6;
    let max = 0;

    for (const n of salary) {
        min = Math.min(min, n);
        max = Math.max(max, n);
        sum += n;
    }

    return (sum - min - max) / (salary.length - 2);
};
