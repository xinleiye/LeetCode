/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let res = 0;
    
    for (let i = brackets.length - 1; i > 0; i--) {
        brackets[i][0] -= brackets[i - 1][0];
    }
    for (const [u, p] of brackets) {
        const rest = income >= u ? u : income;

        res += rest * p / 100;
        income -= rest;
        if (income === 0) {
            break;
        }
    }
    
    return res;
};
