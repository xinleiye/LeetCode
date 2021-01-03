
var ProductOfNumbers = function() {
    this.numbers = [];
    this.products = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.numbers.push(num);
    for (let i = 0, len = this.products.length; i < len; i++) {
        this.products[i] *= num;
    }
    this.products.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    return this.products[this.products.length - k];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
