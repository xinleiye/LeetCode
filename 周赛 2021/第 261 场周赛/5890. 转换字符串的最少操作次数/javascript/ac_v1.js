/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let res = 0;
    const length = s.length;
    let index = 0;
    
    while (index < length) {
        if (s[index] === 'X') {
            res++;
            index += 3;
        } else {
            index++;
        }
    }
    
    return res;
};
