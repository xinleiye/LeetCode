/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let res = "";
    let isSubStr = (str, substr) => {
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

    if (str1.length > str2.length) {
        let tmpStr = str2;

        str2 = str1;
        str1 = tmpStr;
    }

    for (let i = str1.length; i > 0; i--) {
        res = str1.substring(0, i);
        if (isSubStr(str1, res) && isSubStr(str2, res)) {
            return res;
        }
    }

    return "";
};
