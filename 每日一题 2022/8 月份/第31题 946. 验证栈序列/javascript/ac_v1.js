/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const total = pushed.length;
    let pushIndex = 0;
    let popIndex = 0;
    const stack = [];

    while (popIndex < total) {
        if (pushIndex >= total && stack[stack.length - 1] !== popped[popIndex]) {
            return false;
        }
        while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
            stack.pop();
            popIndex++;
        }
        if (pushIndex < total) {
            stack.push(pushed[pushIndex]);
            pushIndex++;
        }
    }

    return true;
};
