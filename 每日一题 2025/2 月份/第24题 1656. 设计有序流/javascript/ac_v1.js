/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.memo = new Array(n + 1).fill("");
    this.index = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const res = [];

    this.memo[idKey] = value;
    while (this.index < this.memo.length && this.memo[this.index]) {
        res.push(this.memo[this.index]);
        this.index++;
    }

    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
