/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    const length = s.length;
    let change = 0;
    
    for (let i = 1; i < length; i++) {
        if (s[i] !== s[i - 1]) {
            change++;
        }
        if (change > 1) {
            return false;
        }
    }
    
    return true;
};
