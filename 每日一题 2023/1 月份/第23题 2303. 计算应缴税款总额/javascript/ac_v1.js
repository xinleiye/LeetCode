/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let res = 0;
    const maxLevel = brackets.length;
    let curLevel = 0;
    let preUpper = 0;

    while (curLevel < maxLevel) {
        const [upper, percent] = brackets[curLevel];
        if (income >= upper) {
            res += (upper - preUpper) * percent;
            curLevel++;
            preUpper = upper;
        } else {
            res += (income - preUpper) * percent;
            break;
        }
    }

    return res / 100;
};
