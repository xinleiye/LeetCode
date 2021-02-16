/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let flag = false;
    let count = 0;

    nums.forEach(val => {
        if (val === 1) {
            if (flag === false) {
                flag = true;
            }
            count++;
        } else {
            if (flag === true) {
                res = Math.max(res, count);
                flag = false;
                count = 0;
            }
        }
    });
    
    if (flag === true) {
        res = Math.max(res, count);
    }

    return res;
};
