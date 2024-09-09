/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];

    for (const ch of s) {
        if (ch >= "0" && ch <= "9") {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join("");
};
