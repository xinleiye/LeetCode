/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1;
    let charIndex = new Array(26).fill(-1);
    
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        
        if (charIndex[index] > -1) {
            res = Math.max(res, i - charIndex[index] - 1);
        } else {
            charIndex[index] = i;
        }
    }

    return res;
};
