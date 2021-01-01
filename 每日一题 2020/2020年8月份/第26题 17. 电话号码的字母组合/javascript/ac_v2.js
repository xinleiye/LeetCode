/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    let charMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    if (digits.length <= 0) {
        return res;
    }

    for (let i = 0; i < charMap[digits[0]].length; i++) {
        res.push(charMap[digits[0]][i]);
    }
    for (let i = 1; i < digits.length; i++) {
        let chars = charMap[digits[i]];
        let length = res.length;

        for (let j = 0; j < length; j++) {
            let preStr = res.shift();

            for (let k = 0; k < chars.length; k++) {
                res.push(preStr + chars[k]);
            }
        }
    }

    return res;
};
