
var MyStack = function() {
    this.queue = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
    console.log(this.queue);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let num = 0;
    let count = this.queue.length - 1;

    while (count) {
        num = this.queue.shift();
        this.queue.push(num);
        res = num;
        count--;
    }

    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let num = 0;
    let count = this.queue.length;
    let res = 0;

    while (count) {
        num = this.queue.shift();
        this.queue.push(num);
        res = num;
        count--;
    }

    return res;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
