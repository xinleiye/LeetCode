/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let res = 0;

    while (num2 > 0) {
        res += Math.floor(num1 / num2);
        [num1, num2] = [num2, num1 % num2];
    }

    return res;
};
