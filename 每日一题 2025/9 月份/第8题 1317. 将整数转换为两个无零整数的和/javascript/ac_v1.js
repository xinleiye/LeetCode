/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const res = [0, 0];

    for (let i = 1; i < n; i++) {
        if (!hasZero(i) && !hasZero(n - i)) {
            res[0] = i;
            res[1] = n - i;

            return res;
        }
    }
};

function hasZero(num) {
    while (num) {
        if (num % 10 === 0) {
            return true;
        }
        num = Math.floor(num / 10);
    }

    return false;
}
