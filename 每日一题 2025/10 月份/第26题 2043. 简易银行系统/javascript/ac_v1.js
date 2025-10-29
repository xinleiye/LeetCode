/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    const total = balance.length;
    const arr = new Array(total + 1);

    for (let i = 0; i < total; i++) {
        arr[i + 1] = balance[i];
    }
    this.total = total;
    this.balance = arr;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (isValidBalance(account1, this.total) && isValidBalance(account2, this.total) && money <= this.balance[account1]) {
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
    if (isValidBalance(account, this.total)) {
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
    if (isValidBalance(account, this.total) && this.balance[account] >= money) {
        this.balance[account] -= money;

        return true;
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

function isValidBalance(id, max) {
    return id >= 1 && id <= max;
}
