/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let res = 0;
    const length = s.length;
    let first = 0;
    let second = 1;
    
    for (let third = 2; third < length; third++) {
        if ((s[first] !== s[second]) && (s[second] !== s[third]) && (s[third] !== s[first])) {
            res++;
        }
        first++;
        second++;
    }
    
    return res;
};
