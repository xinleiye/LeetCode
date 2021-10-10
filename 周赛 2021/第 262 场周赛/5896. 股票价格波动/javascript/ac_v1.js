var StockPrice = function() {
    this.priceMap = new Map();
    this.currentTime = 0;
    this.priceCountSet = new Set();
    this.needResort = true;
    this.sortedPrice = [];
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.needResort = true;
    if (this.priceMap.has(timestamp)) {
        const oldPrice = this.priceMap.get(timestamp);

        this.priceCountSet.delete(oldPrice);
    }
    this.priceMap.set(timestamp, price);
    this.currentTime = Math.max(this.currentTime, timestamp);
    this.priceCountSet.add(price);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.priceMap.get(this.currentTime);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    if (this.needResort) {
        this.needResort = false;
        this.sortedPrice = [...this.priceCountSet].sort((val1, val2) => {
            return val1 - val2;
        });
    }
    return this.sortedPrice[this.sortedPrice.length - 1];
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    if (this.needResort) {
        this.needResort = false;
        this.sortedPrice = [...this.priceCountSet].sort((val1, val2) => {
            return val1 - val2;
        });
    }
    return this.sortedPrice[0];
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */