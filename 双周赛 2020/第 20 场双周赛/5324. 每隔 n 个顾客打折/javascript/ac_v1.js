/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.customerIndex = 0;
    this.discountIndex = n;
    this.discountValue = 1 - discount / 100;
    this.products = products.slice();
    this.prices = prices.slice();
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let totalCost = 0;

    this.customerIndex++;
    product.forEach((val, index) => {
        totalCost += amount[index] * this.prices[this.products.indexOf(val)];
    });

    if (this.customerIndex % this.discountIndex === 0) {
        return totalCost * this.discountValue;
    } else {
        return totalCost;
    }
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
