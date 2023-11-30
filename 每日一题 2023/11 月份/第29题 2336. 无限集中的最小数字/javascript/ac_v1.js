
var SmallestInfiniteSet = function() {
    this.min = 1;
    this.numSet = new Set();
    this.minQueue = new MinPriorityQueue();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let res = 1;

    if (this.numSet.size === 0) {
        res = this.min;
        this.min++;
    } else {
        res = this.minQueue.dequeue().element;
        this.numSet.delete(res);
    }

    return res;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.min && !this.numSet.has(num)) {
        this.numSet.add(num);
        this.minQueue.enqueue(num);
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
