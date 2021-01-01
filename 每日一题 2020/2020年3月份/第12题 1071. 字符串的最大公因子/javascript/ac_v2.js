/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 === str2) {
        return str1;
    }
    if (str1.length > str2.length) {
        return gcdOfStrings(str2, str1);
    }
    if (!str2.startsWith(str1)) {
        return "";
    }

    return gcdOfStrings(str1, str2.substring(str1.length));
};
