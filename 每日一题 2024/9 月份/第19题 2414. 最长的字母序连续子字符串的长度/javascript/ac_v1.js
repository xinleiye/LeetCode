/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let res = 1;
    let index = 1;
    const total = s.length;

    while (index < total) {
        const start = index - 1;

        while (index < total && s.charCodeAt(index) - s.charCodeAt(index - 1) === 1) {
            index++;
        }
        res = Math.max(res, index - start);
        index++;
    }

    return res;
};
