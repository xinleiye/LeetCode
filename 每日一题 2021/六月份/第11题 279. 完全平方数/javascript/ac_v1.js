/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const buff = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, buff[i - j * j]);
        }

        buff[i] = min + 1;
    }

    return buff[n];
};
