/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums.slice();
    const total = nums.length;
    const preSum = new Array(total + 1).fill(0);

    for (let i = 1; i <= total; i++) {
        preSum[i] = nums[i - 1] + preSum[i - 1];
    }
    this.preSum = preSum;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const diff = val - this.nums[index];
    const total = this.nums.length;
    this.nums[index] = val;
    for (let i = index + 1; i <= total; i++) {
        this.preSum[i] += diff;
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
