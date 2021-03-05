function ListNode (val) {
    this.val = isNaN(val) ? Number.MAX_SAFE_INTEGER : val;
    this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.head = new ListNode();
    this.tail = this.head;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const tail = new ListNode(x);

    this.tail.next = tail;
    this.tail = tail;

    return null;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const first = this.head.next;

    if (first) {
        this.head.next = first.next;
        first.next = null;
    }
    if (first === this.tail) {
        this.tail = this.head;
    }

    return first ? first.val : null;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.head.next) {
        return this.head.next.val;
    }

    return null;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.head.next === null;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
