/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for (const ch of moves) {
        if (ch === "U") {
            x--;
        } else if (ch === "D") {
            x++;
        } else if (ch === "L") {
            y--;
        } else {
            y++
        }
    }

    return (x === 0) && (y === 0)
};
