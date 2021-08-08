/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let unMatch = 0;
    const stack = [];

    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.length) {
                stack.pop();
            } else {
                unMatch++;
            }
        }
    }

    return Math.ceil(unMatch / 2);
};
