/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }
    if (a === b && b === c) {
        return "equilateral";
    }
    if (a === b || b === c || a === c) {
        return "isosceles";
    }

    return "scalene";
};
