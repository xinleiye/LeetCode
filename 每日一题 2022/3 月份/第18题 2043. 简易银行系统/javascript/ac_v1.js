/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.total = balance.length;
    this.balance = new Array(balance.length + 1).fill(0);
    balance.forEach((b, index) => {
        this.balance[index + 1] = b;
    });
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (isValidCount(account1, this.total) && isValidCount(account2, this.total)) {
        if (this.balance[account1] < money) {
            return false;
        }
        this.balance[account1] -= money;
        this.balance[account2] += money;

        return true;
    }
    return false;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (isValidCount(account, this.total)) {
        this.balance[account] += money;

        return true;
    }
    return false;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (isValidCount(account, this.total)) {
        if (this.balance[account] >= money) {
            this.balance[account] -= money;

            return true;
        }
    }
    return false;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

function isValidCount (count, maxCount) {
    return count >= 1 && count <= maxCount;
}
