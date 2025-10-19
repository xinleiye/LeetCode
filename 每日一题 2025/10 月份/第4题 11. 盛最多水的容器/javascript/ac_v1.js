/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;

    while (left < right) {
        res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return res;
};
