/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const res = [];
    let commonSet = new Set();
    const maxRow = nums.length;

    for (const num of nums[0]) {
        commonSet.add(num);
    }
    for (let i = 1; i < maxRow; i++) {
        const tempSet = new Set();
        for (const num of nums[i]) {
            if (commonSet.has(num)) {
                tempSet.add(num);
            }
        }
        commonSet = tempSet;
    }
    commonSet.forEach(val => {
        res.push(val);
    });
    
    return res.sort((n1, n2) => n1 - n2);
};
