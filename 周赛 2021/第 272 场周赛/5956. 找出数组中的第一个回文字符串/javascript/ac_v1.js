/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const isPalindrome = (str) => {
        let start = 0;
        let end = str.length - 1;

        while (start < end) {
            if (str[start] === str[end]) {
                start++;
                end--;
            } else {
                return false;
            }
        }

        return true;
    };

    for (const word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }

    return "";
};
