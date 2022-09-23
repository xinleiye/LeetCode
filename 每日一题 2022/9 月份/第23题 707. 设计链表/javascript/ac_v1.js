function ListNode (val, next) {
    this.val = val;
    this.next = next ? next : null;
}

var MyLinkedList = function() {
    this.count = 0;
    this.head = new ListNode(-1);
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.count || index < 0) {
        return -1;
    }

    let node = this.head;

    for (let i = 0; i <= index; i++) {
        node = node.next;
    }

    return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head.next = new ListNode(val, this.head.next);
    this.count++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head;

    while (node.next) {
        node = node.next;
    }
    node.next = new ListNode(val);
    this.count++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.count) {
        return
    } else if (index <= 0) {
        this.addAtHead(val);
    } else {
        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        node.next = new ListNode(val, node.next);
        this.count++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.count) {
        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        node.next = node.next.next;
        this.count--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
