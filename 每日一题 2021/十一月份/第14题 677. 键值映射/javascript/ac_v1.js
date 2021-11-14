var MapSum = function() {
    this.buff = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.buff.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let res = 0;

    this.buff.forEach((val, key) => {
        if (key.indexOf(prefix) === 0) {
            res += val;
        }
    });

    return res;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
