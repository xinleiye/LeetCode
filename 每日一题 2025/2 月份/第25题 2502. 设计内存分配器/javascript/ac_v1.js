/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.memory = new Array(n).fill(0);
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    const total = this.memory.length;
    let index = 0;

    while (index < total) {
        if (this.memory[index] !== 0) {
            index++;
            continue;
        }

        let count = 0;
        while (index < total && this.memory[index] === 0) {
            count++;
            index++;
            if (count === size) {
                this.memory.fill(mID, index - size, index);
                return index - size;
            }
        }
    }

    return -1;
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function(mID) {
    let count = 0;
    const total = this.memory.length;
    for (let i = 0; i < total; i++) {
        if (this.memory[i] === mID) {
            count++;
            this.memory[i] = 0;
        }
    }

    return count;
};

/** 
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */
