/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let hasZero = (num) => {
        while (num) {
            if (num % 10 === 0) {
                return true;
            } else {
                num = Math.floor(num / 10);
            }
        }
    };

    for (let i = 1, len = Math.floor(n / 2); i <= n; i++) {
        if (hasZero(i) || hasZero(n - i)) {
            continue;
        } else {
            return [i, n - i];
        }
    }
};
