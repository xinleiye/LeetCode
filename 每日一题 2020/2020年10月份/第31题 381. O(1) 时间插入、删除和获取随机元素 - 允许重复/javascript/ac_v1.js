/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.buffer = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let index = -1;

    for (let i = this.buffer.length - 1; i >= 0; i--) {
        if (this.buffer[i] === val) {
            index = i;
            break;
        }
    }
    this.buffer.push(val);

    return index === -1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    let index = -1;

    for (let i = this.buffer.length - 1; i >= 0; i--) {
        if (this.buffer[i] === val) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        return false;
    }
    for (let i = index; i < this.buffer.length - 1; i++) {
        this.buffer[i] = this.buffer[i + 1];
    }
    this.buffer.length--;

    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.buffer[Math.floor(Math.random() * this.buffer.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
