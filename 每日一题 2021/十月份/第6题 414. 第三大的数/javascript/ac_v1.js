/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let f1 = -Number.MAX_VALUE;
    let s2 = -Number.MAX_VALUE;
    let t3 = -Number.MAX_VALUE;

    nums.forEach(val => {
        if (val > f1) {
            t3 = s2;
            s2 = f1;
            f1 = val;
        } else if (f1 > val && val > s2) {
            t3 = s2;
            s2 = val;
        } else if (s2 > val && val > t3) {
            t3 = val;
        }
    });

    return t3 === -Number.MAX_VALUE ? f1 : t3;
};
