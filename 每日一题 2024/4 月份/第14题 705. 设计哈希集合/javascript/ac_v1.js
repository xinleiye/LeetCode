
var MyHashSet = function() {
    this.MAX = 997;
    this.data = new Array(this.MAX).fill(0).map(() => [])
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const datum = this.data[this.hash(key)];

    for (const d of datum) {
        if (d === key) {
            return;
        }
    }
    datum.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const datum = this.data[this.hash(key)];
    const total = datum.length;

    for (let i = 0; i < total; i++) {
        if (datum[i] === key) {
            datum.splice(i, 1);
            return;
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const datum = this.data[this.hash(key)];

    for (const d of datum) {
        if (d === key) {
            return true;
        }
    }

    return false;
};

MyHashSet.prototype.hash = function(key) {
    return key % this.MAX;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
