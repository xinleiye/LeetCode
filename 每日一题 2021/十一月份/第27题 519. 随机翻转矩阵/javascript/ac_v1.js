/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
    this.maxRow = m;
    this.maxCol = n;
    this.total = m * n;
    this.map = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    const index = Math.floor(Math.random() * this.total);
    const tarIndex = this.map.has(index) ? this.map.get(index) : index;

    this.total--;
    this.map.set(index, this.map.has(this.total) ? this.map.get(this.total) : this.total);

    return [Math.floor(tarIndex / this.maxCol), tarIndex % this.maxCol];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.total = this.maxRow * this.maxCol;
    this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
