/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let res;

    if (!s || s[0] === "0") {
        return 0;
    }
    res = new Array(s.length + 1);
    res[0] = 0;
    res[1] = 1;
    for (let i = 1, len = s.length; i < len; i++) {
        let code = parseInt(s[i - 1], 10) * 10 + parseInt(s[i], 10);

        if (code <= 26) {
            res[i + 1] = res[i] + res[i - 1];
        } else {
            res[i + 1] = res[i] + 1;
        }
    }

    return res[s.length];
};
