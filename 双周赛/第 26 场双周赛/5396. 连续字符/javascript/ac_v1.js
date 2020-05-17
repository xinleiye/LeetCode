/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let res = 1;
    let len = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            len++;
        } else {
            len = 1;
        }
        res = Math.max(res, len);
    }

    return res;
};
