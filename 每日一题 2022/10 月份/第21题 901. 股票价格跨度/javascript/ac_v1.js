var StockSpanner = function() {
    this.stack = [[Number.MAX_VALUE, -1]];
    this.index = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const stack = this.stack;
    while (price >= stack[stack.length - 1][0]) {
        stack.pop();
    }
    this.index++;

    let res = this.index - stack[stack.length - 1][1];
    stack.push([price, this.index]);

    return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
