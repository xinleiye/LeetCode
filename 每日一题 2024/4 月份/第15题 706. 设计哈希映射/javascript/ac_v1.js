
var MyHashMap = function() {
    this.MAX = 997;
    this.data = new Array(this.MAX).fill(0).map(() => []);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const datum = this.data[this.hash(key)];

    for (const item of datum) {
        if (item[0] === key) {
            item[1] = value;
            return;
        }
    }
    datum.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const datum = this.data[this.hash(key)];

    for (const item of datum) {
        if (item[0] === key) {
            return item[1];
        }
    }

    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const datum = this.data[this.hash(key)];
    const total = datum.length;

    for (let i = 0; i < total; i++) {
        if (datum[i][0] === key) {
            datum.splice(i, 1);
            return;
        }
    }
};

MyHashMap.prototype.hash = function(key) {
    return key % this.MAX;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
