/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const stack = [];
    const length = s.length;

    if (length < 3) {
        return s;
    }
    stack.push(s[0]);
    stack.push(s[1]);
    for (let i = 2; i < length; i++) {
        if (s[i] !== stack[stack.length - 1] || s[i] !== stack[stack.length - 2]) {
            stack.push(s[i]);
        }
    }
    
    return stack.join("");
};
