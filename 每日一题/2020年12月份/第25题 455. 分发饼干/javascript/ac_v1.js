/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0;
    let gIndex = 0;

    g.sort((val1, val2) => {
        return val1 - val2;
    });
    s.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[gIndex]) {
            res++;
            gIndex++;
        }
    }

    return res;
};
