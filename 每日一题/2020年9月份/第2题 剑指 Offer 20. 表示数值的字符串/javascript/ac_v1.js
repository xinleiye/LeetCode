/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let index = 0;
    let end = s.length - 1;
    let hasDot = false;
    let hasE = false;
    let hasNumber = false;

    if (!s.length) {
        return false;
    }
    // 跳过首尾空格
    while (s[index] === " ") {
        index++;
    }
    while (s[end] === " ") {
        end--;
    }
    if (index > end) {
        return false;
    }
    // 只能以 + -  . 和 数字 开始
    if (s[index] !== "+" && s[index] !== "-" && s[index] !== "." && (s[index] < "0" || s[index] > "9")) {
        return false;
    }
    // E 与 e 不能出现在结尾 (本题结尾可以出现 .)
    if (s[end] !== "." && (s[end] < "0" || s[end] > "9")) {
        return false;
    }

    if (s[index] === "+" || s[index] === "-") {
        index++;
    }
    if (s[index] === ".") {
        if (index >= end) {
            return false;
        }
        index++;
        hasDot = true;
    }

    while (index <= end) {
        if (s[index] >= "0" && s[index] <= "9") {
            hasNumber = true;
        } else if (s[index] === ".") {
            if (hasDot || hasE) {
                return false;
            }
            hasDot = true;
        } else if (s[index] === "E" || s[index] === "e") {
            if (hasE || !hasNumber) {
                return false;
            }
            hasE = true;
        } else if (s[index] === "+" || s[index] === "-") {
            if (s[index - 1] !== "E" && s[index - 1] !== "e") {
                return false;
            }
        } else {
            return false;
        }
        index++;
    }

    return hasNumber;
};
