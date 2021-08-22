/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const distance = manhattanDistance([0, 0], target);

    for(const item of ghosts) {
        if (manhattanDistance(item, target) <= distance) {
            return false;
        }
    }

    return true;
};

function manhattanDistance (start, end) {
    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
}
