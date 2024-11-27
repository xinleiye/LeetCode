/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let res = 0;
    const dir = {
        "RIGHT": 1,
        "DOWN": n,
        "LEFT": -1,
        "UP": -n
    };

    for (const c of commands) {
        res += dir[c];
    }

    return res;
};
