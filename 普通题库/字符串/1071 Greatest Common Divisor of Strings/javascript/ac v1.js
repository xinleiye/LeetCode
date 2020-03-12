/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
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
