/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    let res = [1, num + 2];
    let numAdd1 = num + 1;
    let numAdd2 = num + 2;

    for (let i = 1, len = Math.floor(Math.sqrt(numAdd2)); i <= len; i++) {
        if (numAdd1 % i === 0) {
            if (Math.abs(i - numAdd1 / i) < Math.abs(res[0] - res[1])) {
                res = [i, numAdd1 / i];
            }
        }
        if (numAdd2 % i === 0) {
            if (Math.abs(i - numAdd2 / i) < Math.abs(res[0] - res[1])) {
                res = [i, numAdd2 / i];
            }
        }
    }

    return res;
};
