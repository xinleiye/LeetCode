/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let res = 0;
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            res = Math.max(res, stack.length);
        } else if (s[i] === ")") {
            stack.pop();
        }
    }
    
    return res;
};
