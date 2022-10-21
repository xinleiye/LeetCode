var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const stack = this.stack;
    let index = stack.length;
    let days = 0;

    stack.push(price);
    while (index >= 0 && stack[index] <= price) {
        index--;
        days++;
    }

    return days;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
