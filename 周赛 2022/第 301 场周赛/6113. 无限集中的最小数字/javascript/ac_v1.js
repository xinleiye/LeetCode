
var SmallestInfiniteSet = function() {
    this.popNumSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let min = 0;

    while (true) {
        min++;
        if (!this.popNumSet.has(min)) {
            break;
        }
    }
    this.popNumSet.add(min);

    return min;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.popNumSet.has(num)) {
        this.popNumSet.delete(num);
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
