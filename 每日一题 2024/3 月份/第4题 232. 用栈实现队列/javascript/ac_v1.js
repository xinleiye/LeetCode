
var MyQueue = function() {
    this.stack = new Array();
    this.buffer = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let res = 0;

    while (this.stack.length - 1) {
        this.buffer.push(this.stack.pop());
    }
    res = this.stack.pop();
    while (this.buffer.length) {
        this.stack.push(this.buffer.pop());
    }

    return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let res = 0;

    while (this.stack.length - 1) {
        this.buffer.push(this.stack.pop());
    }
    res = this.stack.pop();
    this.buffer.push(res);
    while (this.buffer.length) {
        this.stack.push(this.buffer.pop());
    }

    return res;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
