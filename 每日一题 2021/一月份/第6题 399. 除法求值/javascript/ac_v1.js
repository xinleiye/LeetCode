/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const res = [];
    let start = 0;
    const length = s.length;

    while (start < length) {
        let end = start + 1;

        while (end < length && s[end] === s[start]) {
            end++;
        }
        if (end - start >= 3) {
            res.push([start, end - 1]);
        }
        start = end;
    }

    return res;
};
