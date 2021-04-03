/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let res = 0;
    const stack = [];
    const length = height.length;

    for (let i = 0; i < length; i++) {
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop();

            if (stack.length > 0) {
                let left = stack[stack.length - 1];
                let currentWidth = i - left - 1;
                let currentHeight = Math.min(height[i], height[left]) - height[top];

                res += currentWidth * currentHeight;
            }
        }
        stack.push(i);
    }

    return res;
};
