/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let res = 0;
    let counts = [];
    let preChar = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === preChar) {
            count++;
        } else {
            counts.push(count);
            preChar = s[i];
            count = 1;
        }
    }
    counts.push(count);

    for (let i = 1; i < counts.length; i++) {
        res += Math.min(counts[i], counts[i - 1]);
    }

    return res;
};
