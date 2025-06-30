/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const res = [];
    let pos = 0;
    const total = s.length;

    while (pos + k < total) {
        res.push(s.substring(pos, pos + k));
        pos += k;
    }
    res.push(s.substring(pos, total) + fill.repeat(k - (total - pos)));

    return res;
};
