var StockPrice = function() {
    this.maxTimestamp = 0;
    this.priceMap = new Map();
    this.minQueue = new MinPriorityQueue({
        priority: item => item[1]
    });
    this.maxQueue = new MaxPriorityQueue({
        priority: item => item[1]
    });
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.maxTimestamp = Math.max(this.maxTimestamp, timestamp);
    this.priceMap.set(timestamp, price);
    this.minQueue.enqueue([timestamp, price]);
    this.maxQueue.enqueue([timestamp, price]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.priceMap.get(this.maxTimestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    let cur = this.maxQueue.front().element;

    while (cur[1] !== this.priceMap.get(cur[0])) {
        this.maxQueue.dequeue();
        cur = this.maxQueue.front().element;
    }

    return cur[1];
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    let cur = this.minQueue.front().element;

    while (cur[1] !== this.priceMap.get(cur[0])) {
        this.minQueue.dequeue();
        cur = this.minQueue.front().element;
    }

    return cur[1];
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
