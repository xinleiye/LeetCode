/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sStack = [];
    let tStack = [];
    let getStack = (str, stack) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== "#") {
                stack.push(str[i]);
            } else {
                stack.pop();
            }
        }
    };

    getStack(S, sStack);
    getStack(T, tStack);

    if (sStack.length !== tStack.length) {
        return false;
    }
    for (let i = 0; i < sStack.length; i++) {
        if (sStack[i] !== tStack[i]) {
            return false;
        }
    }

    return true;
};
