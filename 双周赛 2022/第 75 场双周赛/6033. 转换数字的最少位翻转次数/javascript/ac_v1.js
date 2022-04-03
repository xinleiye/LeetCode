/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let res = 0;

    while (start || goal) {
        if ((start & 1) !== (goal & 1)) {
            res++;
        }
        start = start >>> 1;
        goal = goal >>> 1;
    }

    return res;
};
