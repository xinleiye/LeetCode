/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 1;

    if (num <= 5) {
        return false;
    }
    for (let i = 2, len = Math.floor(Math.sqrt(num)); i <= len; i++) {
        if (num % i === 0) {
            sum += i + num / i;
        }
    }

    return sum === num;
};
