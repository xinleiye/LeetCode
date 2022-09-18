/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let res = 0;
    let pos = 0;
    const length = s.length;

    while (pos < length) {
        const start = pos;

        pos++;
        while (pos < length) {
            if ((s.charCodeAt(pos) - s.charCodeAt(pos - 1)) === 1) {
                pos++;
            } else {
                break;
            }
        }
        res = Math.max(res, pos - start);
    }

    return res;
};
