/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let x = 1;
    let y = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            x = x * 2 + y;
        } else if (s[i] === "B") {
            y = y * 2 + x;
        }
    }
    
    return x + y;
};
