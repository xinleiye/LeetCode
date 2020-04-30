/**
 * @param {string[]} strs
 * @return {string}
 * @Runtime 52 ms, faster than 95.15% of JavaScript online submissions for Longest Common Prefix.
 * @Memory_Usage 35 MB, less than 56.23% of JavaScript online submissions for Longest Common Prefix.
 */
var longestCommonPrefix = function(strs) {
    let res;
    let substr;
    let str;
    let end;
    
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    if (strs.indexOf("") > -1) {
        return "";
    }
    
    res = "";
    substr = "";
    str = strs[0];
    end = false;

    for (let j = 0, len1 = str.length; j < len1; j++) {
        substr = substr + str[j];
        for (let i = 1, len = strs.length; i < len; i++) {
            if (strs[i].indexOf(substr) === 0) {
                continue;
            } else {
                end = true;
                break;
            }
        }
        if (end) {
            break;
        } else {
            res = substr;
        }
    }
    
    return res;
};
