/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let startRow = 0;
    let startCol = 0;

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                startRow += directions[0][0];
                startCol += directions[0][1];
                break;
            case "R":
                startRow += directions[1][0];
                startCol += directions[1][1];
                break;
            case "D":
                startRow += directions[2][0];
                startCol += directions[2][1];
                break;
            case "L":
                startRow += directions[3][0];
                startCol += directions[3][1];
                break;
            default:
                break;
        }
    }

    return startRow === 0 && startCol === 0;
};
