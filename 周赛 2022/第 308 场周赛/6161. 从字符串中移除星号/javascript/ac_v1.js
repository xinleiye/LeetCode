/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const length = s.length;
    const stack = [];
    
    for (let i = 0; i < length; i++) {
        if (s[i] >= "a" && s[i] <= "z") {
            stack.push(s[i]);
        } else if (s[i] === "*") {
            stack.pop();
        }
    }
    
    return stack.join("");
};
