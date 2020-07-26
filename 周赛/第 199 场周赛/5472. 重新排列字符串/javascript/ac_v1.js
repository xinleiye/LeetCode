/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let charArr = new Array(s.length);
    
    indices.forEach((val, index) => {
        charArr[val] = s[index];
    });
    
    return charArr.join("");
};
