/**
 * @param {string[]} strs
 * @return {string}
 * @Runtime 64 ms, faster than 51.97% of JavaScript online submissions for Longest Common Prefix.
 * @Memory_Usage 35.2 MB, less than 36.64% of JavaScript online submissions for Longest Common Prefix.
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    
    if (strs.length === 0) {
        return "";
    }

    for (let j = 0, len1 = strs[0].length; j < len1; j++) {
        for (let i = 1, len = strs.length; i < len; i++) {
            if (strs[0][j] !== strs[i][j]) {
                return res;
            }
        }
        res = res + strs[0][j];
    }
    
    return res;
};
