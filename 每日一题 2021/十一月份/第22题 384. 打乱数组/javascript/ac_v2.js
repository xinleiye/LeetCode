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
    const res = [];
    const numsArr = [];
    const total = this.originArr.length;

    this.nums.forEach(num => {
        numsArr.push(num);
    });

    for (let i = 0; i < total; i++) {
        const index = Math.floor(Math.random() * numsArr.length);

        res.push(numsArr[index]);
        numsArr.splice(index, 1);
    }

    return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
