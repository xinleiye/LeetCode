/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums.slice();
    this.originArr = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.originArr.slice();
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const total = this.nums.length;

    for (let i = 0; i < total; i++) {
        const index = Math.floor(Math.random() * (total - i)) + i;
        const tmp = this.nums[i];

        this.nums[i] = this.nums[index];
        this.nums[index] = tmp;
    }

    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
