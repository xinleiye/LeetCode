var FrontMiddleBackQueue = function() {
    this.buffer = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.buffer.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    this.buffer.splice(this.buffer.length >>> 1, 0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.buffer.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return this.buffer.length === 0 ? -1 : this.buffer.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (this.buffer.length === 0) {
        return -1
    } else {
        let index = this.buffer.length % 2 === 1 ? this.buffer.length >>> 1 : (this.buffer.length >>> 1) - 1;

        return this.buffer.splice(index, 1)[0];
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return this.buffer.length === 0 ? -1 : this.buffer.pop();
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
