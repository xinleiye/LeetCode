/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const rest = time % (n -1);

    return Math.floor(time / (n - 1)) % 2 ? n - rest : rest + 1;
};
