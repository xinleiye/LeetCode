/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const total = s.length;

    if (numRows === 1 || numRows >= total) {
        return s;
    }

    const res = [];
    const group = Math.ceil(total / numRows);
    const count = numRows * 2 - 2;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < group; col++) {
            const base = col * count;

            let index = base + row;
            if (index < total) {
                res.push(s[index]);
            }
            if (row > 0 && row < numRows - 1) {
                index = base + count - row;
                if (index < total) {
                    res.push(s[index]);
                }
            }
        }
    }

    return res.join("");
};
