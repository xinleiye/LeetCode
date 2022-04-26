/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    const numMap = new Map();
    let index = 0;

    for (const num of nums) {
        if (numMap.has(num)) {
            numMap.get(num).push(index);
        } else {
            numMap.set(num, [index]);
        }
        index++;
    }
    this.numMap = numMap;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexs = this.numMap.get(target);
    return indexs[Math.floor(Math.random() * indexs.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
