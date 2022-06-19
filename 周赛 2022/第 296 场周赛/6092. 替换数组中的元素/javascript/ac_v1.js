/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const numMap = new Map();
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        numMap.set(nums[i], i);
    }
    
    for (const [s, t] of operations) {
        const index = numMap.get(s);
        
        if (index !== undefined) {
            nums[index] = t;
        }
        numMap.set(t, index);
    }
    
    return nums;
};
