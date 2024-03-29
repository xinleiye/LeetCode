/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    const res = [];

    for (let i = 1; i <= 1000; i++) {
        let zVal;

        for (let j = 1; j <= 100; j++) {
            zVal = customfunction.f(i, j);
            if (zVal < z) {
                continue;
            } else if (customfunction.f(i, j) === z) {
                res.push([i, j]);
            } else {
                break;
            }
        }
    }

    return res;
};
