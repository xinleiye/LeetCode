/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0;
    let left = new Array(heights.length).fill(0);
    let right = new Array(heights.length).fill(heights.length);
    let stack = [];

    heights.forEach((val, index) => {
        while (stack.length && heights[stack[stack.length - 1]] >= val) {
            right[stack[stack.length - 1]] = index;
            stack.pop();
        };
        left[index] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(index);
    });

    heights.forEach((val, index) => {
        res = Math.max(res, (right[index] - left[index] - 1) * val);
    });

    return res;
};
