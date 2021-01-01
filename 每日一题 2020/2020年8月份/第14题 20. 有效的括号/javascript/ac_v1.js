/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case "(":
            case "[":
            case "{":
                stack.push(s[i]);
                break;
            case ")":
                if (stack.pop() !== "(") {
                    return false;
                }
                break;
            case "]":
                if (stack.pop() !== "[") {
                    return false;
                }
                break;
            case "}":
                if (stack.pop() !== "{") {
                    return false;
                }
                break;
            default:
                break;
        }
    }

    return stack.length === 0;
};
