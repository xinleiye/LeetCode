function isValidAccount(accountId, n) {
    return accountId >= 1 && accountId <= n;
}

/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.total = balance.length;
    this.balance = balance.slice(0);
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (isValidAccount(account1, this.total) && isValidAccount(account2, this.total)) {
        const money1 = this.balance[account1 - 1];
        const money2 = this.balance[account2 - 1];
        
        if (money1 < money) {
            return false;
        }
        this.balance[account1 - 1] = money1 - money;
        this.balance[account2 - 1] = money2 + money;
        
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
    if (isValidAccount(account, this.total)) {
        this.balance[account - 1] += money;
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
    if (isValidAccount(account, this.total)) {
        if (this.balance[account - 1] >= money) {
            this.balance[account - 1] -= money;
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
