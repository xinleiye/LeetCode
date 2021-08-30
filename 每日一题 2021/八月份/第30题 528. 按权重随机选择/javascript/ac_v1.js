/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.buff = new Array(w.length).fill(0);
    this.buff[0] = w[0];
    for (let i = 1, len = w.length; i < len; i++) {
        this.buff[i] = this.buff[i - 1] + w[i];
    }
    this.total = this.buff[w.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.floor(Math.random() * this.total) + 1;
    let left = 0;
    let right = this.buff.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (this.buff[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
