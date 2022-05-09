/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const res = new Array(s.length + 1);
    const total = s.length;
    let low = 0;
    let high = s.length;

    for (let i = 0; i < total; i++) {
        if (s[i] === "D") {
            res[i] = high;
            high--;
        } else {
            res[i] = low;
            low++;
        }
    }
    res[total] = low;

    return res;
};
