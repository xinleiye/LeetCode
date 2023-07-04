/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let res = 0;

    for (const s of strs) {
        let hasChar = false;

        for (const ch of s) {
            if (ch >= "a" && ch <= "z") {
                res = Math.max(res, s.length);
                hasChar = true;
                break;
            }
        }
        if (!hasChar) {
            res = Math.max(res, parseInt(s, 10));
        }
    }

    return res;
};
