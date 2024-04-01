/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const res = [];

    for (const ch of s) {
        if (ch !== "i") {
            res.push(ch);
        } else {
            res.reverse();
        }
    }

    return res.join("");
};
