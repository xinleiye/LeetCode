/**
 * @param {number[]} cont
 * @return {number[]}
 */
function getGcd (a, b) {
    let rest;

    while (b > 0) {
        rest = a % b;
        a = b;
        b = rest;
    }
    return a;
}
var fraction = function(cont) {
    let gcd;
    let res;
    let length = cont.length;

    function fract (index) {
        if (index === 1) {
            return [1, cont[length - 1]];
        } else {
            let [n, m] = fract(index - 1);
            return [m, cont[length - index] * m + n];
        }
    }
    res = fract(length);
    gcd = getGcd(res[1], res[0]);

    return [res[1] / gcd, res[0] / gcd];
};
