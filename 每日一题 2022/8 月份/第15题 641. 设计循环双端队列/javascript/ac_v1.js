class LinkNode {
    constructor (val, pre, next) {
        this.val = val;
        this.pre = pre || null;
        this.next = next || null;
    }
}
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.maxCount = k;
    this.count = 0;
    this.head = new LinkNode(-1);
    this.tail = new LinkNode(-1);
    this.head.next = this.tail;
    this.tail.pre = this.head;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.count === this.maxCount) {
        return false;
    }

    const node = new LinkNode(value);
    this.head.next.pre = node;
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
    this.count++;

    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.count === this.maxCount) {
        return false;
    }

    const node = new LinkNode(value, this.tail.pre, this.tail);
    this.tail.pre.next = node;
    node.next = this.tail;
    node.pre = this.tail.pre;
    this.tail.pre = node;
    this.count++;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.count === 0) {
        return false;
    }

    const first = this.head.next;
    first.next.pre = this.head;
    this.head.next = first.next;
    this.count--;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.count === 0) {
        return false;
    }

    const last = this.tail.pre;
    last.pre.next = this.tail;
    this.tail.pre = last.pre;
    this.count--;

    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.count === 0 ? -1 : this.head.next.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.count === 0 ? -1 : this.tail.pre.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.count === this.maxCount;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
