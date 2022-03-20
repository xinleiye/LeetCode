/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
    let p1 = pattern[0];
    let p1Count = 1;
    let p2 = pattern[1];
    let p2Count = 1;
    const total = text.length;


    let sub1 = 0;
    for (let i = 0; i < total; i++) {
        if (p1Count > 0 && text[i] === p2) {
            sub1 += p1Count;
        }
        if (text[i] === p1) {
            p1Count++;
        }
    }

    let sub2 = 0;
    for (let i = total - 1; i >= 0; i--) {
        if (p2Count && text[i] === p1) {
            sub2 += p2Count;
        }
        if (text[i] === p2) {
            p2Count++;
        }
    }

    return Math.max(sub1, sub2);
};
