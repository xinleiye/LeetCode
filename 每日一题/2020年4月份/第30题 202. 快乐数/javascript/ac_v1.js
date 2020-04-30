/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nSet = new Set();

    while (n > 1) {
        let num = 0;

        if (nSet.has(n)) {
            return false;
        } else {
            nSet.add(n);
        }
        while (n > 0) {
            num += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = num;
    }

    return true;
};
