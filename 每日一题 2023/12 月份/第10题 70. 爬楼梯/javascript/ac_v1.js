/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }

    let res = 0;
    let step1 = 1;
    let step2 = 2;
    let step = 3;
    while (step <= n) {
        res = step1 + step2;
        step1 = step2;
        step2 = res;
        step++;
    }

    return res;
};
