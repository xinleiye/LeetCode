/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    const stack = [];
    const length = S.length;
    let index= 1;

    stack.push(S[0]);
    while (index < length) {
        if (S[index] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(S[index]);
        }
        index++;
    }

    return stack.join("");
};
