/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let arr = [];
    let res = 0;

    if (s.length <= 1) {
        return 0;
    }
    arr.push(s[0]);
    for (let i = 1, len = s.length; i < len; i++) {
        if (s[i] === "R") {
            if (arr[arr.length - 1] === "L") {
                arr.pop();
            } else {
                arr.push(s[i]);
            }
        } else if (s[i] === "L") {
            if (arr[arr.length - 1] === "R") {
                arr.pop();
            } else {
                arr.push(s[i]);
            }
        }
        if (arr.length === 0) {
            res++;
        }
    }
    return res;
};
