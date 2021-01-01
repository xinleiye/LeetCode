/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    let charMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let dfs = (preStr, preIndex) => {
        let currentIndex = preIndex + 1;
        let chars = charMap[digits[currentIndex]];

        if (currentIndex === digits.length - 1) {
            for (let i = 0; i < chars.length; i++) {
                res.push(preStr + chars[i]);
            }
        } else {
            for (let i = 0; i < chars.length; i++) {
                dfs(preStr + chars[i], currentIndex);
            }
        }
    };

    if (digits.length > 0) {
        dfs("", -1);
    }

    return res;
};
