/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let res = [];
    
    nums.sort((val1, val2) => val1 -val2);
    nums.forEach((val, index) => {
        if (val === target) {
            res.push(index);
        }
    });

    return res;
};
