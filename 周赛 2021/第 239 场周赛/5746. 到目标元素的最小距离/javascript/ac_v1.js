/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
    let res = 1000;
    
    nums.forEach((val, index) => {
        if (val === target) {
            res = Math.min(res, Math.abs(index - start));
        }
    });
    
    return res;
};
