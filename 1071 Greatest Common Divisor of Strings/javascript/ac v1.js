/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * @Runtime 64 ms, faster than 33.61% of JavaScript online submissions for Greatest Common Divisor of Strings.
 * @Memory_Usage 35.6 MB, less than 100.00% of JavaScript online submissions for Greatest Common Divisor of Strings.
 */
var gcdOfStrings = function(str1, str2) {
    let subStr = "";
    
    if (str1.length < str2.length) {
        let tmp;
        
        tmp = str1;
        str1 = str2;
        str2 = tmp;
    }
    
    function isSubStr(str, substr) {
        let strc = "";

        if (str.length % substr.length) {
            return false;
        } else {
            for (let i = 0, len = str.length / substr.length; i < len; i++) {
                strc += substr;
            }
        }
        return strc === str;
    }
    
    for (let i = str2.length; i > 0; i--) {
        subStr = str2.substring(0, i);
        if (isSubStr(str1, subStr) && isSubStr(str2, subStr)) {
            return subStr;
        }
    }
    return "";
};
