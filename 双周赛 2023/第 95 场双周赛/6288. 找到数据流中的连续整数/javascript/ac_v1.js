/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.curLen = 0;
    this.targetVal = value;
    this.targetLen = k;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    if (num === this.targetVal) {
        this.curLen++;
    } else {
        this.curLen = 0;
    }

    return this.curLen >= this.targetLen;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
