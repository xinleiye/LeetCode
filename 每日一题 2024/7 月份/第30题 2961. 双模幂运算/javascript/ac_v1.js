/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(variables, target) {
    const res = [];
    let index = 0;

    for (const [a, b, c, m] of variables) {
        if (calcABModM(calcABModM(a, b, 10), c, m) === target) {
            res.push(index);
        }
        index++;
    }

    return res;
};

function calcABModM(a, b, m) {
    let res = 1;

    while (b > 0) {
        if ((b & 1) === 1) {
            res = (res * a) % m;
        }
        a = (a * a) % m;
        b = b >>> 1;
    }

    return res;
}
