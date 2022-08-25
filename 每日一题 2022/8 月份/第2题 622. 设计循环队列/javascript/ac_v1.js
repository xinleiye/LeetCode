/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    const tail = new QueueNode();
    let cur = tail;

    for (let i = 1; i < k; i++) {
        cur = new QueueNode(-1, cur);
    }
    tail.next = cur;
    this.head = cur;
    this.tail = cur;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    if (this.isEmpty()) {
        this.head.val = value;
    } else {
        this.tail = this.tail.next;
        this.tail.val = value;
    }

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.head.val = -1;
    this.head = this.head.next;
    if (this.isEmpty()) {
        this.tail = this.head;
    }

    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.head.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.tail.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head.val === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.tail.next === this.head && this.tail.val !== -1;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

class QueueNode {
    constructor (val, next) {
        this.val = isNaN(val) ? -1 : val;
        this.next = next ? next : null;
    }
}
