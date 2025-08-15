/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    while (n) {
        if ((n % 3) === 2) {
            return false;
        }
        n = Math.floor(n / 3);
    }

    return true;
};
