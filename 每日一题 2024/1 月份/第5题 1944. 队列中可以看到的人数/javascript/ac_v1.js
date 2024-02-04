/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    const res = new Array(heights.length).fill(0);
    const stack = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        const h = heights[i];

        while (stack.length && stack[stack.length - 1] <= h) {
            stack.pop();
            res[i] += 1;
        }
        if (stack.length) {
            res[i] += 1;
        }
        stack.push(h);
    }

    return res;
};
