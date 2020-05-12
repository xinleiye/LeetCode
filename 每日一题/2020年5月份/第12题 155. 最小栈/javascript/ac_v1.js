/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataBuff = [];
    this.minVal = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataBuff.push(x);
    this.minVal = Math.min(this.minVal, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.dataBuff.pop();
    this.minVal = Infinity;
    this.dataBuff.forEach((val) => {
        this.minVal = Math.min(this.minVal, val);
    });
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.dataBuff.length > 0) {
        return this.dataBuff[this.dataBuff.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal === Infinity ? null : this.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
