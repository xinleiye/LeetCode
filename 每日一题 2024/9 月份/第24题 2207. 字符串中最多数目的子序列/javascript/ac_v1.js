/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
    let p1Total = 0;
    let p2Total = 0;
    for (const ch of text) {
        if (ch === pattern[0]) {
            p1Total++;
        }
        if (ch === pattern[1]) {
            p2Total++;
        }
    }

    let p1Count = 0;
    let p2Count = 0;
    let total = 0;
    for (const ch of text) {
        if (ch === pattern[1]) {
            p2Count++;
        }
        if (ch === pattern[0]) {
            p1Count++;
            total += p2Total - p2Count;
        }
    }

    return total + Math.max(p1Total, p2Total);
};
