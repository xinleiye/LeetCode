/**
 * 双向链表
 */
function LinkNode (val, pre, next) {
    this.val = val;
    this.pre = pre;
    this.next = next;
}
/**
 * 将 node 插入到 cur 的前面
 */
function insertNode (cur, node) {
    node.pre = cur.pre;
    node.next = cur;
    cur.pre.next = node;
    cur.pre = node;
}
/**
 * 删除 cur 前的一个节点
 */
function deleteNode (cur) {
    const preNode = cur.pre;

    if (preNode.pre) {
        preNode.pre.next = preNode.next;
        preNode.next.pre = preNode.pre;
        preNode.pre = null;
        preNode.next = null;

        return preNode;
    } else {
        return null;
    }
}

var TextEditor = function() {
    const head = new LinkNode(-1, null, null);
    const tail = new LinkNode(-1, head, null);

    head.next = tail;
    this.current = tail;
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    for (const ch of text) {
        const node = new LinkNode(ch, null, null);

        insertNode(this.current, node);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let res = 0;

    while (k > 0 && deleteNode(this.current)) {
        k--;
        res++;
    }

    return res;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    let cur =  this.current;
    while (k > 0 && cur.pre.pre) {
        k--;
        cur = cur.pre;
    }
    this.current = cur;

    const res = [];
    let count = 10;
    cur = cur.pre
    while (count > 0 && cur.pre) {
        count--;
        res.unshift(cur.val);
        cur = cur.pre;
    }

    return res.join("");
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    let cur = this.current;
    while (k > 0 && cur.next) {
        k--;
        cur = cur.next;
    }
    this.current = cur;

    const res = [];
    let count = 10;
    cur = cur.pre;
    while (count > 0 && cur.pre) {
        count--;
        res.unshift(cur.val);
        cur = cur.pre;
    }

    return res.join("");
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
