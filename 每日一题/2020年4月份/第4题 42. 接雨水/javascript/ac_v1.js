/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let maxLeft = 0;
    let maxRight = 0;
    let length = height.length;

    for (let i = 0; i < length; i++) {
        maxLeft = Math.max(maxLeft, height[i]);
        maxRight = Math.max(maxRight, height[length - i - 1]);
        res += maxLeft + maxRight - height[i];
    }

    return res - maxLeft * height.length;
};
