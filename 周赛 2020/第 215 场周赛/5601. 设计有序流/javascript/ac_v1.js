/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.buffer = new Array(n + 1).fill(0);
    this.currentIndex = 1;
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
    let res = [];
    
    this.buffer[id] = value;
    while (this.buffer[this.currentIndex]) {
        res.push(this.buffer[this.currentIndex]);
        this.currentIndex++;
    }

    return res;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
