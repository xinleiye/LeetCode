/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let current = 1;
    let preOne = 1;
    let preTwo = 1;

    for (let i = 2; i <= n; i++) {
        current = preOne + preTwo;
        preTwo = preOne;
        preOne = current;
    }

    return current;
};
