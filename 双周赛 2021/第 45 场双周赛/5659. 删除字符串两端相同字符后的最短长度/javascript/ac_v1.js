/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            break;
        } else {
            const current = s[left];

            while (s[left] === current) {
                left++;
            }
            while (s[right] === current) {
                right--;
            }
        }
    }

    return right < left ? 0 : right - left + 1;
};
