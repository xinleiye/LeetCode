/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = 0;
    let numMap = new Map();
    
    nums.forEach(item => {
        if (numMap.has(item)) {
            numMap.set(item, numMap.get(item) + 1);
        } else {
            numMap.set(item, 1);
        }
    });
    
    numMap.forEach((val, key) => {
        if (val === 1) {
            res += key;
        }
    });
    
    return res;
};
