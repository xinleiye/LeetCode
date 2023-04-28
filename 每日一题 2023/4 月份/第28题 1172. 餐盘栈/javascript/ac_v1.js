/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.notFullQueue = new MinPriorityQueue();
    this.capacity = capacity;
    this.stacks = [];
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    const queue = this.notFullQueue;

    if (!queue.isEmpty() && queue.front().element >= this.stacks.length) {
        queue.clear();
    }
    if (queue.size() === 0) {
        // 没有空栈，需要在尾部插入一个栈
        this.stacks.push([val]);
        if (this.capacity > 1) {
            queue.enqueue(this.stacks.length - 1);
        }
    } else {
        const index = queue.front().element;

        this.stacks[index].push(val);
        if (this.stacks[index].length === this.capacity) {
            queue.dequeue();
        }
    }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    return this.popAtStack(this.stacks.length - 1);
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    const stacks = this.stacks;
    if (index < 0 || stacks.length <= index || this.stacks[index].length === 0) {
        return -1;
    }

    const stack = this.stacks[index];
    if (stack.length === this.capacity) {
        this.notFullQueue.enqueue(index);
    }

    const res = stack.pop();
    while (stacks.length && stacks[stacks.length - 1].length === 0) {
        stacks.pop();
    }

    return res;
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
