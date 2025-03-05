/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const total = palindrome.length;
    if (total === 1) {
        return "";
    }

    const chars = palindrome.split("");
    const halfLen = Math.floor(total >>> 1);

    for (let i = 0; i < halfLen; i++) {
        if (chars[i] !== "a") {
            chars[i] = "a";
            return chars.join("");
        }
    }

    chars[total - 1] = "b";
    return chars.join("");
};
