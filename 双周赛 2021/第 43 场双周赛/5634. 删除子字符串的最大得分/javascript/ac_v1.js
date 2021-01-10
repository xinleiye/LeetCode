/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let res = 0;
    let maxStr;
    let maxVal;
    let minStr;
    let minVal;
    const removeStr = (str, subStr, val) => {
        let totalVal = 0;
        const stack = [];

        if (str.length === 0) {
            return 0;
        }
        stack.push(str[0]);
        for (let i = 1; i < str.length; i++) {
            if (stack.length && str[i] === subStr[1] && stack[stack.length - 1] === subStr[0]) {
                stack.pop();
                totalVal += val;
            } else {
                stack.push(str[i]);
            }
        }
        s = stack.join("");

        return totalVal;
    };

    if (x > y) {
        maxStr = "ab";
        maxVal = x;
        minStr = "ba";
        minVal = y;
    } else {
        maxStr = "ba";
        maxVal = y;
        minStr = "ab";
        minVal = x;
    }
    res += removeStr(s, maxStr, maxVal);
    res += removeStr(s, minStr, minVal);

    return res;
};
