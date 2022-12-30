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
                hasChar = true;
                break;
            }
        }
        if (hasChar) {
            res = Math.max(res, s.length);
        } else {
            res = Math.max(res, Number(s));
        }
    }

    return res;
};
