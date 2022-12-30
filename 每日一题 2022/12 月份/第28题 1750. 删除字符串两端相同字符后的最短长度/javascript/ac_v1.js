/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right && s[left] === s[right]) {
        const ch = s[left];

        while (ch === s[left]) {
            left++;
        }
        while (ch === s[right]) {
            right--;
        }
    }

    return right < left ? 0 : right - left + 1;
};
