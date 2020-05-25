/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    if (capacity > 0) {
        this.maxSize = capacity;
        this.nodeMap = new Map();
        this.list = new LinkList();
        this.currentSize = 0;
    } else {
        return null;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.nodeMap.has(key)) {
        let node = this.nodeMap.get(key);

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
        let node = this.nodeMap.get(key);

        this.list.removeNode(node);
        node.value = value;
        this.list.addToHead(node);
    } else {
        let node = new ListNode(key, value);

        if (this.currentSize < this.maxSize) {
            this.currentSize++;
            this.nodeMap.set(key, node);
            this.list.addToHead(node);
        } else {
            let tailNode = this.list.removeTail();

            this.nodeMap.set(key, node);
            this.nodeMap.delete(tailNode.key);
            this.list.addToHead(node);
        }
    }
};

class ListNode {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
};
// 双向链表
class LinkList {
    constructor () {
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    removeNode (node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    addToHead (node) {
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }
    removeTail () {
        let node = this.tail.prev;

        this.removeNode(node);

        return node;
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
