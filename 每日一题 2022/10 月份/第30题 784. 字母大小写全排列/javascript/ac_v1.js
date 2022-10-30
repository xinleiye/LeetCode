/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = [];
    const total = s.length;
    const charArr = s.split("");
    const isUpper = (ch) => ch >= "A" && ch <= "Z";
    const isLower = (ch) => ch >= "a" && ch <= "z";
    const dfsSearch = (pre, cur) => {
        if (pre.length === total) {
            res.push(pre.join(""));
            return;
        }
        if (isUpper(charArr[cur]) || isLower(charArr[cur])) {
            pre.push(charArr[cur]);
            dfsSearch(pre, cur + 1);
            pre.pop();
            if (isUpper(charArr[cur])) {
                pre.push(charArr[cur].toLowerCase());
            } else if (isLower(charArr[cur])) {
                pre.push(charArr[cur].toUpperCase());
            }
        } else {
            pre.push(charArr[cur]);
        }
        dfsSearch(pre, cur + 1);
        pre.pop();
    };

    dfsSearch([], 0);

    return res;
};
