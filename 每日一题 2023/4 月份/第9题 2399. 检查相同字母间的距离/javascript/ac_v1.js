/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const length = s.length;
    const charPos = new Array(26).fill(-1);

    for (let i = 0; i < length; i++) {
        const pos = s.charCodeAt(i) - 97;

        if (charPos[pos] !== -1) {
            if (i - charPos[pos] - 1 !== distance[pos]) {
                return false;
            }
        } else {
            charPos[pos] = i;
        }
    }

    return true;
};
