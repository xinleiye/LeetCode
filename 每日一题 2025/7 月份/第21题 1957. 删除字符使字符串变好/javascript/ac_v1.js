/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const res = [];
    const total = s.length;

    if (total < 3) {
        return s;
    }
    res.push(s[0]);
    res.push(s[1]);
    for (let i = 2; i < total; i++) {
        if (s[i] !== res[res.length - 1] || s[i] !== res[res.length - 2]) {
            res.push(s[i]);
        }
    }

    return res.join("");
};
