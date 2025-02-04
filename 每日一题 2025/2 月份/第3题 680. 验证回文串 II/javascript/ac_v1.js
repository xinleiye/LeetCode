/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    const checkPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            } else {
                start++;
                end--;
            }
        }
        return true;
    };

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            break;
        }
    }

    return checkPalindrome(s, left, right - 1) || checkPalindrome(s, left + 1, right);
};
