/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let res = new Array(s.length + 1);
    const len = s.length;

    if (!s) {
        return 0;
    }

    res[len] = 1;
    if (s[len - 1] === "0") {
        res[len - 1] = 0;
    } else {
        res[len - 1] = 1;
    }
    for (let i = len - 2; i >= 0; i--) {
        if (s[i] === "0") {
            res[i] = 0;
        } else if (Number(s[i]) * 10 + Number(s[i + 1]) <= 26) {
            res[i] = res[i + 1] + res[i + 2];
        } else {
            res[i] = res[i + 1];
        }
    }

    return res[0];
};
