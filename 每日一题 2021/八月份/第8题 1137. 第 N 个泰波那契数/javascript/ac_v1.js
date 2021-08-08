/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const tc = new Array(3);
    let index = 3;

    tc[0] = 0;
    tc[1] = 1;
    tc[2] = 1;
    while (index <= n) {
        tc.push(tc[index - 3] + tc[index - 2] + tc[index - 1]);
        index++;
    }

    return tc[n];
};
