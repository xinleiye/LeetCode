
var NumberContainers = function() {
    this.indexMap = new Map();
    this.minMap = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    this.indexMap.set(index, number);
    this.minMap.set(number, Math.min(index, this.minMap.get(number)));
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    let res = this.minMap.get(number) || 0;
    if (res && number === this.indexMap.get(res)) {
        return res;
    }

    res = 1e9 + 7;
    const pairs = this.indexMap.entries();
    for (const [index, value] of pairs) {
        if (value === number) {
            res = Math.min(index, res);
        }
    }
    if (res === 1e9 + 7) {
        this.minMap.delete(number);
        return -1;
    } else {
        this.minMap.set(number, res);
        return res;
    }
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
