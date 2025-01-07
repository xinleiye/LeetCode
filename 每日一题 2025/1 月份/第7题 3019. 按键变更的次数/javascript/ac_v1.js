/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let res = 0;
    const total = s.length;
    const lowerStr = s.toLowerCase();

    for (let i = 1; i < total; i++) {
        if (lowerStr[i] !== lowerStr[i - 1]) {
            res++;
        }
    }

    return res;
};
