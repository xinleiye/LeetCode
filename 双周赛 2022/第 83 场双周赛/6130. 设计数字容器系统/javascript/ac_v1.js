
var NumberContainers = function() {
    this.indexMap = new Map();
    this.numMap = new Map();
    this.resMap = new Map();
    this.dirtySet = new Set();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if (this.indexMap.has(index)) {
        const preNum = this.indexMap.get(index);
        const preIndexSet = this.numMap.get(preNum);
        
        if (preIndexSet.size === 1) {
            this.numMap.delete(preNum);
        } else {
            preIndexSet.delete(index);
            this.dirtySet.add(preNum);
        }
    }
    this.indexMap.set(index, number);
    if (this.numMap.has(number)) {
        this.numMap.get(number).add(index);
    } else {
        this.numMap.set(number, new Set().add(index));
        this.resMap.set(number, index);
    }
    this.dirtySet.add(number);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.numMap.has(number)) {
        return -1;
    }
    if (!this.dirtySet.has(number) && this.resMap.has(number)) {
        return this.resMap.get(number);
    }

    let res = 1e9;
    const indexSet = this.numMap.get(number);
    indexSet.forEach(val => {
        res = Math.min(res, val);
    });
    this.resMap.set(number, res);
    this.dirtySet.delete(number);
    
    return res;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
