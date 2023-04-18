/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let res = 0;
    let left = 0;
    let right = text.length - 1;

    while (left <= right) {
        let length = 1;

        while (left + length - 1 < right - length + 1) {
            if (check(text, left, right - length + 1, length)) {
                res += 2;
                break;
            }
            length++;
        }
        if (left + length - 1 >= right - length + 1) {
            res++;
        }
        left += length;
        right -= length;
    }

    return res;
};

function check(str, left, right, length) {
    for (let i = 0; i < length; i++) {
        if (str[left + i] !== str[right + i]) {
            return false;
        }
    }

    return true;
}
