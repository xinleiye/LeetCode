/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 0;
    let second = 0;
    
    nums.forEach(val => {
        if (val > max) {
            second = max;
            max = val;
        } else if (val > second) {
            second = val;
        }
    });
    
    return (max - 1) * (second - 1);
};
