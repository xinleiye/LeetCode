/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lineLen = 0;
    let row = 1;

    for(const ch of s) {
        const w = widths[ch.charCodeAt(0) - 97];
        lineLen += w;
        if (lineLen > 100) {
            row++;
            lineLen = w;
        }
    }

    return [row, lineLen];
};
