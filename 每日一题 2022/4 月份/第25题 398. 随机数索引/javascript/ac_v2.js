/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums.slice();
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let count = 0;
    const total = this.nums.length;

    for (let i = 0; i < total; i++) {
        if (this.nums[i] === target) {
            count++;
            if (Math.floor(Math.random() * count) === 0) {
                res = i;
            }
        }
    }

    return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
