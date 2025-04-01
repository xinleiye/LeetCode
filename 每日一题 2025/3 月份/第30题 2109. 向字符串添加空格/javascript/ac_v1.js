/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const res = [];
    const total = s.length;
    let spaceIndex = 0;

    for (let i = 0; i < total; i++) {
        if (i === spaces[spaceIndex]) {
            res.push(" ");
            spaceIndex++
        }
        res.push(s[i]);
    }

    return res.join("");    
};
