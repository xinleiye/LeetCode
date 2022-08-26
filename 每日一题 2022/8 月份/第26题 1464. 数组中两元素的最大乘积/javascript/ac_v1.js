/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = 0;
    let max2 = 0;

    for (const n of nums) {
        if (n > max1) {
            max2 = max1;
            max1 = n;
        } else if (n > max2) {
            max2 = n;
        }
    }

    return (max1 - 1) * (max2 - 1);
};
