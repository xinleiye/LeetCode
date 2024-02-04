/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const res = [];

    for (const ch of s) {
        if (ch === "B" && (res.length && res[res.length - 1] === "A") ||
            ch === "D" && (res.length && res[res.length - 1] === "C")) {
            res.pop();
        } else {
            res.push(ch);
        }
    }

    return res.length;
};
