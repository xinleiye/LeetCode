/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    if (colors[0] !== colors[colors.length - 1]) {
        return colors.length - 1;
    }

    let res = 0;
    let right = colors.length - 1;
    while (colors[right] === colors[0]) {
        right--;
    }
    res = Math.max(res, right);

    let left = 0;
    right = colors.length - 1;
    while (colors[left] === colors[right]) {
        left++;
    }
    res = Math.max(res, right - left);

    return res;
};
