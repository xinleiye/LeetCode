/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let res = 0;
    let valL = 0;
    let valR = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            valR++;
        }
    }

    if (valR === 0) {
        return s.length - 1;
    }

    for (let i = 0, len = s.length - 1; i < len; i++) {
        if (s[i] === "0") {
            valL++;
        } else {
            valR--;
        }
        res = Math.max(res, valL + valR);
    }

    return res;
};
