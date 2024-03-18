/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const total = nums.length;
    const sum = new Array(total + 1).fill(0);

    for (let i = 0; i < total; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    this.sum = sum;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right + 1] - this.sum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
