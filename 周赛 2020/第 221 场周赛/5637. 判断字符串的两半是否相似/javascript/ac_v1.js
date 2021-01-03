/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let totalCount = 0;
    let halfCount = 0;
    const length = s.length;
    const charArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    for (let i = 0; i < length; i++) {
        if (charArr.indexOf(s[i]) >= 0) {
            if (i < length / 2) {
                halfCount++;
            }
            totalCount++;
        }
    }
    
    return halfCount * 2 === totalCount;
};
