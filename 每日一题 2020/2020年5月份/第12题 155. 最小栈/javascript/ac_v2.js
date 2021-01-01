class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.head = null;
    this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let node = new ListNode(x);

    node.next = this.head;
    this.head = node;
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.head) {
        this.head = this.head.next;
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.head) {
        return this.head.val;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length > 0) {
        return this.minStack[this.minStack.length - 1];
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */