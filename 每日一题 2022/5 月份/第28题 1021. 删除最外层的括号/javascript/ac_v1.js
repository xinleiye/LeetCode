/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const res = [];
    const stack = [];
    const length = s.length;
    let start = 0;

    for (let i = 0; i < length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length === 0) {
                let cur = s.substring(start, i + 1);

                cur = cur.substring(1, cur.length - 1);
                res.push(cur);
                start = i + 1;
            }
        }
    }

    return res.join("");
};
