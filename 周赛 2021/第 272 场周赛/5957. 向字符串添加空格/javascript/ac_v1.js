/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const res = [];
    const spaceCount = spaces.length;

    res.push(s.slice(0, spaces[0]));
    for (let i = 1; i < spaceCount; i++) {
        res.push(s.slice(spaces[i - 1], spaces[i]))
    }
    res.push(s.slice(spaces[spaceCount - 1]));

    return res.join(" ");
};
