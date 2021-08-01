/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let num = 2;
    const max = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= max; i++) {
        if (n % i === 0) {
            if (n / i !== i) {
                num += 2;
            } else {
                num++;
            }
        }
        if (num > 3) {
            return false;
        }
    }

    return num === 3;
};
