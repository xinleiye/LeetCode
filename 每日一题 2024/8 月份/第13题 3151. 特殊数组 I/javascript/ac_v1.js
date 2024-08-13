/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let pre = -1;
    let cur = 0;

    for (const n of nums) {
        cur = n % 2;
        if (cur === pre) {
            return false;
        }
        pre = cur;
    }

    return true;
};
