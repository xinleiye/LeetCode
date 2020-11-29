function ListNode (val) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
}
var FrontMiddleBackQueue = function() {
    this.head = new ListNode(0);
    this.tail = this.head;
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    let node = new ListNode(val);
    
    node.next = this.head.next;
    this.head.next = node;
    this.total++;
    if (this.total === 1) {
        this.tail = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let newNode = new ListNode(val);
    let mid = this.total >>> 1;
    let preNode = this.head;
    let node = this.head.next;
    let index = 0;

    while (index < mid) {
        preNode = node;
        node = node.next;
        index++;
    }

    newNode.next = node;
    preNode.next = newNode;
    this.total++;
    if (this.total === 1) {
        this.tail = newNode;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
    this.total++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if (this.total === 0) {
        return -1;
    } else {
        let node = this.head.next;

        this.head = this.head.next;
        this.total--;
        if (this.total === 0) {
            this.tail = this.head;
        }

        return node.val;
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (this.total === 0) {
        return -1;
    } else {
        let midNode;
        let mid = this.total % 2 === 1 ? this.total >>> 1 : (this.total >>> 1) - 1;
        let preNode = this.head;
        let node = this.head.next;
        let index = 0;

        while (index < mid) {
            preNode = node;
            node = node.next;
            index++;
        }

        midNode = node;
        preNode.next = midNode.next;
        midNode.next = null;
        this.total--;
        if (this.total === 0) {
            this.tail = this.head;
        }

        return midNode.val;
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if (this.total === 0) {
        return -1;
    } else {
        let tail = this.tail;
        let node = this.head;

        while (node.next !== tail) {
            node = node.next;
        }
        this.tail = node;
        node.next = null;
        this.total--;

        return tail.val;
    }
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
