var MaxQueue = function() {
    this.value = new Array(10000).fill(0);
    this.currentStart = 0;
    this.currentEnd = -1;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    let max = -Infinity;

    if (this.currentStart > this.currentEnd) {
        return -1;
    } else {
        for (let i = this.currentStart; i <= this.currentEnd; i++) {
            if (max < this.value[i]) {
                max = this.value[i];
            }
        }
    }

    return max;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.currentEnd++;
    this.value[this.currentEnd] = value;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.currentStart > this.currentEnd) {
        return -1;
    } else {
        return this.value[this.currentStart++];
    }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */