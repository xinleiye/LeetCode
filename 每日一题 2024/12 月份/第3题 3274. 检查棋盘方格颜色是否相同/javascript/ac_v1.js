/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    return (getPos(coordinate1) % 2) === (getPos(coordinate2) % 2);
};

function getPos(pos) {
    return pos.charCodeAt(0) - 97 + 1 + Number(Number(pos[1]));
}
