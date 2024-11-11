/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    return Math.min(x, Math.floor(y / 4)) % 2 === 1 ? "Alice" : "Bob";
};
