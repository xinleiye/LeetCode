/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const chars = s.split("");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (chars[left] < chars[right]) {
            chars[right] = chars[left];
        } else if (chars[left] > chars[right]) {
            chars[left] = chars[right];
        }
        left++;
        right--;
    }

    return chars.join("");
};
