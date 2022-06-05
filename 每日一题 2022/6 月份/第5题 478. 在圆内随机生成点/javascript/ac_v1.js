/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.xCenter = x_center;
    this.yCenter = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    while (true) {
        const x = Math.random() * (2 * this.radius) - this.radius;
        const y = Math.random() * (2 * this.radius) - this.radius;

        if (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(this.radius, 2)) {
            return [this.xCenter + x, this.yCenter + y];
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
