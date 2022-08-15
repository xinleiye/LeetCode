/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    const total = nums.length;
    let res = 0;
    let pre = nums[total - 1];
    
    for (let i = total - 2; i >= 0; i--) {
        const cur = nums[i];

        if (cur > pre) {
            const cuts = Math.ceil(cur / pre);

            res += cuts - 1;
            pre = Math.floor(cur / cuts);
        } else {
            pre = cur;
        }
    }
    
    return res;
};
