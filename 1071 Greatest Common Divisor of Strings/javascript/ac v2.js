/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * @Runtime 56 ms, faster than 71.78% of JavaScript online submissions for Greatest Common Divisor of Strings.
 * @Memory_Usage 33.8 MB, less than 100.00% of JavaScript online submissions for Greatest Common Divisor of Strings.
 */
var gcdOfStrings = function(str1, str2) {
    if (str1.length < str2.length) {
        return gcdOfStrings(str2, str1);
    }
    
    if (str1 === str2) {
        return str1;
    }
    if (!str1.startsWith(str2)) {
        return "";
    }
    
    return gcdOfStrings(str1.substring(str2.length), str2);
};
