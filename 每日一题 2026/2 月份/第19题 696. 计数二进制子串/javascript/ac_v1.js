/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const total = s.length;
    let res = 0;
    let index = 0;
    let preCount = 0;

    while (index < total) {
        let count = 0;
        const ch = s[index];

        while (index < total && s[index] === ch) {
            count++;
            index++;
        }
        res += Math.min(preCount, count);
        preCount = count;
    }

    return res;
};
