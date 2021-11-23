/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originArr = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.originArr.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const res = [];
    const indexSet = new Set();
    const total = this.originArr.length;
    const getRandom = () => {
        return Math.floor(Math.random() * total);
    };

    while (indexSet.size < total) {
        const index = getRandom();

        if (!indexSet.has(index)) {
            indexSet.add(index);
            res.push(this.originArr[index]);
        }
    }

    return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
