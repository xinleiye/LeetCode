/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxCapacity = capacity;
    this.curCapacity = 0;
    this.list = new LinkList();
    this.nodeMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.nodeMap.has(key)) {
        const node = this.nodeMap.get(key);

        this.list.removeNode(node);
        this.list.addToHead(node);

        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.nodeMap.has(key)) {
        const node = this.nodeMap.get(key);

        this.list.removeNode(node);
        node.value = value;
        this.list.addToHead(node);
    } else {
        const node = new ListNode(key, value);

        if (this.curCapacity < this.maxCapacity) {
            this.nodeMap.set(key, node);
            this.list.addToHead(node);
            this.curCapacity++;
        } else {
            const tailNode = this.list.removeTail();

            this.nodeMap.set(key, node);
            this.nodeMap.delete(tailNode.key);
            this.list.addToHead(node);
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class ListNode {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LinkList {
    constructor () {
        this.head = new ListNode(-1, -1);
        this.tail = new ListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    removeNode (node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
    }
    addToHead (node) {
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }
    removeTail () {
        const node = this.tail.prev;

        this.removeNode(node);

        return node;
    }
}
