/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let res = 0;
    let multMap = new Map();
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let mult = nums[i] * nums[j];
            
            if (multMap.has(mult)) {
                multMap.set(mult, multMap.get(mult) + 1);
            } else {
                multMap.set(mult, 1);
            }
        }
    }

    multMap.forEach(val => {
        if (val >= 2) {
            res += (val * (val - 1)) / 2 * 8;
        }
    });

    return res;
};
