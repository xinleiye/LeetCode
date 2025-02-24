const MAX_LEVEL = 32;
const P_FACTOR = 0.25;

class SkiplistNode {
    constructor (val, level) {
        this.val = val;
        this.next = new Array(level).fill(null);
    }
}

const randomLevel = () => {
    let level = 1;

    while (Math.random() < P_FACTOR && level < MAX_LEVEL) {
        level++;
    }

    return level;
};

var Skiplist = function() {
    this.head = new SkiplistNode(-1, MAX_LEVEL);
    this.level = 0;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    let cur = this.head;

    for (let i = this.level - 1; i >= 0; i--) {
        while (cur.next[i] && cur.next[i].val < target) {
            cur = cur.next[i];
        }
    }
    cur = cur.next[0];
    if (cur && cur.val === target) {
        return true;
    }

    return false;
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    const update = new Array(MAX_LEVEL).fill(this.head);
    let cur = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        while (cur.next[i] && cur.next[i].val < num) {
            cur = cur.next[i];
        }
        update[i] = cur;
    }

    const level = randomLevel();
    this.level = Math.max(this.level, level);

    const newNode = new SkiplistNode(num, level);
    for (let i = 0; i < level; i++) {
        newNode.next[i] = update[i].next[i];
        update[i].next[i] = newNode;
    }
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    const update = new Array(MAX_LEVEL).fill(null);
    let cur = this.head;

    for (let i = this.level - 1; i >= 0; i--) {
        while (cur.next[i] && cur.next[i].val < num) {
            cur = cur.next[i];
        }
        update[i] = cur;
    }
    cur = cur.next[0];
    if (!cur || cur.val !== num) {
        return false;
    }
    for (let i = 0; i < this.level; i++) {
        if (update[i].next[i] !== cur) {
            break;
        }
        update[i].next[i] = cur.next[i];
    }
    while (this.level > 1 && !this.head.next[this.level - 1]) {
        this.level--;
    }

    return true;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
