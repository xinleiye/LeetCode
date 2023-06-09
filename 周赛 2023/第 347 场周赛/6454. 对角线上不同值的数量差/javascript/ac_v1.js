/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const res = s.split("");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] < s[right]) {
            res[right] = s[left];
            res[left] = s[left];
        } else if (s[left] > s[right]) {
            res[right] = s[right];
            res[left] = s[right];
        } else {
            res[left] = s[left];
            res[right] = s[right];
        }
        left++;
        right--;
    }

    return res.join("");
};
