/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let res = "";
    let stack = [];

    for (let i = 0; i < num.length; i++) {
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    for (let i = 0; i < stack.length; i++) {
        if (res === "" && stack[i] === "0") {
            continue;
        }
        res = res + stack[i];
    }

    return res === "" ? "0" : res;
};
